import { Router } from "express";
import { FeedbackController } from "../controllers/feedback.controller";

const router = Router();

router.post("/", FeedbackController.addFeedback);

router.get("/", FeedbackController.getAllFeedbacks);

router.get(
  "/all",

  FeedbackController.getAllFeedbacksForAdmin
);

router.get(
  "/single/:id",

  FeedbackController.getSingleFeedback
);

router.patch(
  "/update/:id",

  FeedbackController.updateFeedback
);

router.delete(
  "/delete/:id",

  FeedbackController.deleteFeedback
);

export const FeedbackRoutes = router;
