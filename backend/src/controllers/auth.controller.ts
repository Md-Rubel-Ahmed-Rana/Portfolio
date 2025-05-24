import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthService } from "../services/auth.service";
import RootController from "../shared/rootController";
import { cookieManager } from "../shared/cookies";

class Controller extends RootController {
  registerUser = this.catchAsync(async (req, res) => {
    await AuthService.registerUser(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Registered successfully",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  loginUser = this.catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const { accessToken, refreshToken } = await AuthService.loginUser(
      email,
      password
    );
    cookieManager.setTokens(res, accessToken, refreshToken);
    this.apiResponse(res, {
      success: true,
      message: "Login successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  auth = this.catchAsync(async (req, res) => {
    const userId = req?.user?.id;
    const user = await AuthService.auth(userId);
    this.apiResponse(res, {
      success: true,
      message: "Authenticated user",
      statusCode: httpStatus.OK,
      data: user,
    });
  });

  logout = this.catchAsync(async (req: Request, res: Response) => {
    cookieManager.clearTokens(res);
    this.apiResponse(res, {
      statusCode: 200,
      success: true,
      message: "Logout successful",
      data: null,
    });
  });

  forgetPassword = this.catchAsync(async (req: Request, res: Response) => {
    const email = req.body.email as string;
    await AuthService.forgetPassword(email);
    this.apiResponse(res, {
      statusCode: 200,
      success: true,
      message:
        "A password reset link has been sent to your email. Please check your inbox or spam folder and follow the instructions to reset your password.",
      data: null,
    });
  });

  verifyResetPasswordToken = this.catchAsync(
    async (req: Request, res: Response) => {
      this.apiResponse(res, {
        statusCode: 200,
        success: true,
        message: "Proceed to reset your password",
        data: null,
      });
    }
  );
}
export const AuthController = new Controller();
