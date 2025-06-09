import { Router } from "express";
import { FeedbackController } from "../controllers/feedback.controller";
import { JwtInstance } from "../shared/jwt";

const router = Router();

router.post("/", FeedbackController.addFeedback);

router.get("/", FeedbackController.getAllFeedbacks);

router.get(
  "/me",
  JwtInstance.verifyFeedbackToken as any,
  FeedbackController.getFeedbacksByOwner
);

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

router.post("/send-request-email", FeedbackController.sendFeedbackRequestMail);

export const FeedbackRoutes = router;
