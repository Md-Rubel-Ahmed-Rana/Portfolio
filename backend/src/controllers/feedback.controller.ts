import { Request, Response } from "express";
import httpStatus from "http-status";
import { FeedbackService } from "../services/feedback.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  addFeedback = this.catchAsync(async (req: Request, res: Response) => {
    if (req?.body?.status) {
      return this.apiResponse(res, {
        success: false,
        message: "You are not authorized to approve feedback",
        statusCode: httpStatus.UNAUTHORIZED,
        data: null,
      });
    }

    await FeedbackService.addFeedback(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Feedback added",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllFeedbacks = this.catchAsync(async (_req: Request, res: Response) => {
    const data = await FeedbackService.getAllFeedbacks();
    this.apiResponse(res, {
      success: true,
      message: "Feedbacks fetched",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getAllFeedbacksForAdmin = this.catchAsync(
    async (req: Request, res: Response) => {
      const filter = req.query?.filter as string;
      const data = await FeedbackService.getAllFeedbacksForAdmin(filter);
      this.apiResponse(res, {
        success: true,
        message: "Feedbacks fetched for admin",
        statusCode: httpStatus.OK,
        data,
      });
    }
  );

  getSingleFeedback = this.catchAsync(async (req: Request, res: Response) => {
    const data = await FeedbackService.getSingleFeedback(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Feedback fetched",
      statusCode: httpStatus.OK,
      data,
    });
  });

  updateFeedback = this.catchAsync(async (req: Request, res: Response) => {
    const data = await FeedbackService.updateFeedback(req.params.id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Feedback updated",
      statusCode: httpStatus.OK,
      data,
    });
  });

  deleteFeedback = this.catchAsync(async (req: Request, res: Response) => {
    const data = await FeedbackService.deleteFeedback(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Feedback deleted",
      statusCode: httpStatus.OK,
      data,
    });
  });
}

export const FeedbackController = new Controller();
