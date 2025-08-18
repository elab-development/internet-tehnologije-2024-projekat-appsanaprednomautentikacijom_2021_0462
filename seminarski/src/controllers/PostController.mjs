import Post from "../models/Post.mjs";
import { v4 } from "uuid";
export default class PostController {
  async getAll(req, res) {
    try {
      const posts = await Post.scan().exec();
      res.send({
        posts,
      });
    } catch (error) {
      res.status(404).send({ error: "Posts not found." });
    }
  }

  async getMy(req, res) {
    try {
      const myPosts = await Post.scan("userId").eq(req.userId).exec();
      res.send({ result: myPosts });
    } catch (error) {
      res.status(404).send({ error: "Posts not found." });
    }
  }

  async create(req, res) {
    try {
      const { destination, description, text } = req.body;
      //dodaj proveru za body parametre
      const post = new Post({
        id: v4(),
        userId: req.userId,
        destination,
        description,
        text,
        createdBy: req.userEmail,
      });
      await post.save();
      res.status(201).send({ message: "Post created." });
    } catch (error) {
      res.status(400).send({ error: "Failed to create post." });
    }
  }

  async getById(req, res) {
    const postId = req.params.id;
    if (!postId) {
      res.status(400).send({ message: "Please provide post id" });
    }
    try {
      const post = await Post.get(postId);
      res.send({ result: post });
    } catch (error) {
      res.status(404).send({ error: "Post not found." });
    }
  }

  async delete(req, res) {
    console.log("Deleting post");
    const postId = req.params.id;
    console.log("Post ID:", postId);
    if (!postId) {
      res.status(400).send({ message: "Please provide post id" });
      return;
    }
    try {
      const post = await Post.get(postId);
      if (post.userId !== req.userId) {
        res
          .status(403)
          .send({ error: "You are not authorized to delete this post." });
        return;
      }
      await Post.delete(postId);
      res.send({ message: "Post deleted." });
    } catch (error) {
      res.status(404).send({ error: "Post not found." });
    }
  }
}
