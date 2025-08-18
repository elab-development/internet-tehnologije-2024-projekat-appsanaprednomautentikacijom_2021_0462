import Post from "../models/Post.mjs";
import Comment from "../models/Comment.mjs";
import { v4 } from "uuid";
export default class CommentController {
  async getComments(req, res) {
    console.log("Pozvala se getComments metoda.");
    const postId = req.params.id;
    if (!postId) {
      return res.status(400).send({ message: "Please provide post id" });
    }
    try {
      const post = await Post.get(postId);
      if (!post) {
        return res.status(404).send({ error: "Post not found." });
      }
      const comments = await Comment.scan("postId").eq(postId).exec();
      res.send({ comments });
    } catch (error) {
      res.status(500).send({ error: "Failed to retrieve comments." });
    }
  }

  async addComment(req, res) {
    console.log("Pozvala se kreiranje komentara.");
    const postId = req.params.id;
    const { text } = req.body;

    if (!postId || !text) {
      return res
        .status(400)
        .send({ message: "Please provide post id and comment text" });
    }
    try {
      const post = await Post.get(postId);
      if (!post) {
        return res.status(404).send({ error: "Post not found." });
      }
      const comment = new Comment({
        id: v4(),
        userId: req.userId,
        text,
        createdBy: req.userEmail,
        postId: post.id,
      });

      await comment.save();
      res.status(201).send({ message: "Comment added.", comment });
    } catch (error) {
      res.status(500).send({ error: "Failed to add comment." });
    }
  }
}
