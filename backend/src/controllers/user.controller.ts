import { Request, Response } from "express";
import httpStatus from "http-status";
import { UserService } from "../services/user.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  getAllUsers = this.catchAsync(async (_req: Request, res: Response) => {
    const data = await UserService.getAllUsers();
    this.apiResponse(res, {
      success: true,
      message: "Users found successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getSingleUser = this.catchAsync(async (req: Request, res: Response) => {
    const data = await UserService.getSingleUser(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "User found successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  updateUser = this.catchAsync(async (req: Request, res: Response) => {
    await UserService.updateUser(req.params.id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "User updated successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  verifyUser = this.catchAsync(async (req: Request, res: Response) => {
    const data = await UserService.verifyUser(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "User verified successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  unVerifyUser = this.catchAsync(async (req: Request, res: Response) => {
    const data = await UserService.unVerifyUser(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "User unverified successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  suspendUser = this.catchAsync(async (req: Request, res: Response) => {
    const data = await UserService.suspendUser(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "User suspended successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  unSuspendUser = this.catchAsync(async (req: Request, res: Response) => {
    const data = await UserService.unSuspendUser(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "User unsuspended successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });
  resetPassword = this.catchAsync(async (req: Request, res: Response) => {
    const userId = req.body.id;
    const newPassword = req.body.password;
    await UserService.resetPassword(userId, newPassword);
    this.apiResponse(res, {
      statusCode: 200,
      success: true,
      message: "Password has been reset successfully",
      data: null,
    });
  });
}

export const UserController = new Controller();
