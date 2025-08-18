import { Router } from "express";
import PostController from "../controllers/PostController.mjs";
import validateToken from "../middlewares/validateToken.mjs";
import CommentController from "../controllers/CommentController.mjs";

const router = Router();
const postController = new PostController();
const commentController = new CommentController();

router.get("/getAll", postController.getAll.bind(postController));
router.get("/getMy", validateToken, postController.getMy.bind(postController));
router.post(
  "/create",
  validateToken,
  postController.create.bind(postController)
);
router.get(
  "/:id/comments",
  commentController.getComments.bind(commentController)
);
router.post(
  "/:id/comments",
  validateToken,
  commentController.addComment.bind(commentController)
);
router.get("/:id", postController.getById.bind(postController));

router.delete(
  "/delete/:id",
  validateToken,
  postController.delete.bind(postController)
);

export default router;
