import dynamoose from "../../config/dbconfig.mjs";

const schema = new dynamoose.Schema({
  id: String,
  userId: String,
  destination: String,
  description: String,
  createdBy: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Post = dynamoose.model("Post", schema);
export default Post;
