import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
  AssociateSoftwareTokenCommand,
  VerifySoftwareTokenCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export default class UserController {
  poolData;
  userPool;
  client;
  constructor() {
    this.poolData = {
      UserPoolId: process.env.USER_POOL_ID,
      ClientId: process.env.CLIENT_ID,
    };
    this.userPool = new CognitoUserPool(this.poolData);
    this.client = new CognitoIdentityProviderClient({
      //Ovo izdvoji u env varijablu
      region: "eu-north-1",
    });
  }

  login(req, res) {
    const username = req.body.email;
    const password = req.body.password;

    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const userData = {
      Username: username,
      Pool: this.userPool,
    };
    //ovo resi bolje
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        const token = result.idToken.jwtToken;
        res.status(200).send({
          message: "Successfully logged in",
          token: token,
        });
      },
      onFailure: function (error) {
        res.status(401).send({
          error: error.message,
        });
      },
      mfaSetup: async function (challangeName, challangeParameters) {
        //prvo logovanje
        const session = cognitoUser.Session;
        const params = {
          Session: session,
        };
        const client = new CognitoIdentityProviderClient({
          region: "eu-north-1",
        });

        const command = new AssociateSoftwareTokenCommand(params);
        try {
          const response = await client.send(command);
          res.status(200).send({
            message: "Please setup 2 factor authentication.",
            first: true,
            secretCode: {
              secret: response.SecretCode,
              session: response.Session,
            },
          });
        } catch (error) {
          console.error("Error associating software token:", error);
          res.status(500).send({
            error: "Failed to associate TOTP device",
          });
        }
      },
      totpRequired: function (_, _s) {
        res.send({
          first: false,
          session: cognitoUser.Session,
          message: "Posalji kod iz autentikatora",
        });
      },
    });
  }

  register(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const emailAttribute = new CognitoUserAttribute({
      Name: "email",
      Value: email,
    });

    const userAttributes = [];
    userAttributes.push(emailAttribute);

    this.userPool.signUp(
      email,
      password,
      userAttributes,
      [],
      (error, result) => {
        if (error) {
          const errorMessage = error.message;
          res.status(400).send({ error: errorMessage });
          return;
        }
        //Mozes da printas result, da vidis sta vraca ako ti treba id ili tako nesto
        res
          .status(201)
          .send({ message: "Created: Please confirm your email." });
        return;
      }
    );
  }

  confirmRegister(req, res) {
    const code = req.body.code;
    const username = req.body.username;

    const userData = {
      Username: username,
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, function (error, result) {
      if (error) {
        const errorMessage = error.message;
        res.status(400).send({ error: errorMessage });
        return;
      }
      //Ovde je result samo: SUCCESS...
      res.send({ message: "Successfully confirmed." });
    });
  }

  async confirm2fa(req, res) {
    const params = {
      Session: req.body.session, // Same session returned from `AssociateSoftwareTokenCommand`
      UserCode: req.body.code, // The 6-digit code entered by the user
    };

    try {
      const command = new VerifySoftwareTokenCommand(params);
      const response = await this.client.send(command);
      console.log("TOTP Verification Response:", response);

      if (response.Status === "SUCCESS") {
        //TODO:ovde posalji bolji response
        res.send({ message: "2FA is set up. Please login." });
      } else {
        res.send({ message: "Failed confirmation" });
      }
    } catch (error) {
      console.error("Error verifying TOTP code:", error);
      res.send("error");
    }
  }

  async confirmLogin(req, res) {
    const session = req.body.session;
    const code = req.body.code;
    const username = req.body.username;

    const params = {
      ClientId: this.poolData.ClientId,
      ChallengeName: "SOFTWARE_TOKEN_MFA",
      Session: session,
      ChallengeResponses: {
        USERNAME: username,
        SOFTWARE_TOKEN_MFA_CODE: code,
      },
    };

    try {
      const command = new RespondToAuthChallengeCommand(params);
      const response = await this.client.send(command);

      if (response.AuthenticationResult) {
        res.status(200).send({
          message: "Successfully logged in",
          token: response.AuthenticationResult.IdToken,
        });
      } else {
        res.status(400).send({
          error: "Failed to verify TOTP",
        });
      }
    } catch (error) {
      console.error("Error verifying TOTP:", error);
      res.status(500).send({
        error: "Failed to verify TOTP",
      });
    }
  }
}
