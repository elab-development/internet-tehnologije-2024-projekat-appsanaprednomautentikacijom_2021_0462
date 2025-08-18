import dynamoose from "../../config/dbconfig.mjs";

const schema = new dynamoose.Schema({
  id: String,
  postId: String,
  userId: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: String,
});

const Comment = dynamoose.model("Comment", schema);

export default Comment;
