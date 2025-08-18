import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const COGNITO_ISSUER = `https://cognito-idp.${process.env.COGNITO_REGION}.amazonaws.com/${process.env.USER_POOL_ID}`;
const client = jwksClient({
  jwksUri: `${COGNITO_ISSUER}/.well-known/jwks.json`,
});

const getPublicKey = async (header) => {
  const key = await client.getSigningKey(header.kid);
  return key;
};

export default async function validateToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(401).send("Nemas token majmune");
  }

  try {
    const decodedHeader = jwt.decode(token, { complete: true });
    const publicKeyObject = await getPublicKey(decodedHeader.header);

    const decodedToken = jwt.verify(token, publicKeyObject.publicKey, {
      issuer: COGNITO_ISSUER,
      audience: process.env.APP_CLIENT_ID,
      algorithms: ["RS256"],
    });
    req.userId = decodedToken["cognito:username"];
    req.userEmail = decodedToken.email;
  } catch (error) {
    res.status(401).send({ error: "Invalid token" });
    return;
  }
  next();
}
