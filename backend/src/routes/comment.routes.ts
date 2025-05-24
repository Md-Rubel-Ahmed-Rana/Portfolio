import { Router } from "express";
import { CommentController } from "../controllers/comment.controller";

const router = Router();

router.post("/add", CommentController.addComment);

router.get("/", CommentController.getAllComments);

router.get(
  "/by-post/:postId",

  CommentController.getCommentsForSpecificPost
);

router.get("/single/:id", CommentController.getSingleComment);

router.patch("/update/:id", CommentController.updateComment);

router.delete("/delete/:id", CommentController.deleteComment);

export const CommentRoutes = router;
