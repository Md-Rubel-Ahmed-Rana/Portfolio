import httpStatus from "http-status";
import { CommentService } from "../services/comment.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  addComment = this.catchAsync(async (req, res) => {
    await CommentService.addComment(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Comment added successfully",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllComments = this.catchAsync(async (req, res) => {
    const filter = req.query?.filter as string;
    const data = await CommentService.getAllComments(filter);
    this.apiResponse(res, {
      success: true,
      message: "Comments fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getCommentsForSpecificPost = this.catchAsync(async (req, res) => {
    const data = await CommentService.getCommentsForSpecificPost(
      req.params.postId
    );
    this.apiResponse(res, {
      success: true,
      message: "Comments fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getSingleComment = this.catchAsync(async (req, res) => {
    const data = await CommentService.getSingleComment(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Comment fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  updateComment = this.catchAsync(async (req, res) => {
    await CommentService.updateComment(req.params.id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Comment updated successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  deleteComment = this.catchAsync(async (req, res) => {
    await CommentService.deleteComment(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Comment deleted successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
}

export const CommentController = new Controller();
