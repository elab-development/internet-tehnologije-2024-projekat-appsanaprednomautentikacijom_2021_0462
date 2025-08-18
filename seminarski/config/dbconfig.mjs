import dynamoose from "dynamoose";
const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_ID,
  },
  region: "eu-north-1",
});
dynamoose.aws.ddb.set(ddb);

export default dynamoose;
