import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { Types } from "mongoose";
import { cookieManager } from "../shared/cookies";
import { envConfig } from "../config/envConfig";
import { UserService } from "../services/user.service";

class JWT {
  private signToken = async (
    payload: { id: Types.ObjectId | string; email: string },
    secret: string,
    expiresIn: string = "7d"
  ): Promise<string> => {
    return jwt.sign(payload, secret, {
      expiresIn: "30d",
    });
  };

  private getExpiredDate(date: string): string {
    return String(date);
  }

  public generateAccessToken = async (payload: {
    id: Types.ObjectId | string;
    email: string;
  }): Promise<string> => {
    return this.signToken(
      payload,
      envConfig.jwt.accessTokenSecret,
      envConfig.jwt.accessTokenExpire
    );
  };

  public generateRefreshToken = async (payload: {
    id: Types.ObjectId | string;
    email: string;
  }): Promise<string> => {
    return this.signToken(
      payload,
      envConfig.jwt.refreshTokenSecret,
      envConfig.jwt.refreshTokenExpire
    );
  };

  public verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const accessTokenWithBearer = req?.cookies?.mdRubelAhmedRanaAccessToken;
    const refreshTokenWithBearer = req?.cookies?.mdRubelAhmedRanaRefreshToken;

    const accessToken = accessTokenWithBearer?.split(" ")[1];
    const refreshToken = refreshTokenWithBearer?.split(" ")[1];

    if (!accessToken || !refreshToken) {
      return res.status(401).json({
        statusCode: 401,
        success: false,
        message: "You are not authenticated. Please login!",
        data: null,
      });
    }

    try {
      const user = jwt.verify(accessToken, envConfig.jwt.accessTokenSecret) as {
        id: string;
        email: string;
      };
      req.user = user;
      return next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return this.handleExpiredAccessToken(refreshToken, res, next);
      }
      return res.status(401).json({
        statusCode: 401,
        success: false,
        message: "You are not authenticated.",
        data: null,
      });
    }
  };

  private handleExpiredAccessToken = async (
    refreshToken: string,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const decoded = jwt.verify(
        refreshToken,
        envConfig.jwt.refreshTokenSecret
      ) as {
        id: string;
        email: string;
      };

      const payload = { id: decoded.id, email: decoded.email };
      const newAccessToken = await this.generateAccessToken(payload);
      const newRefreshToken = await this.generateRefreshToken(payload);
      cookieManager.setTokens(res, newAccessToken, newRefreshToken);

      const user = await UserService.getSingleUser(payload.id);
      return res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Tokens rotated",
        data: user,
      });
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return this.logoutUser(res);
      }
      return res.status(401).json({
        statusCode: 401,
        success: false,
        message: "You are not authenticated. Please log in again.",
        data: null,
      });
    }
  };

  private logoutUser = (res: Response) => {
    cookieManager.clearTokens(res);
    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "You have logged out",
      data: null,
    });
  };

  public async generatePasswordResetToken(
    id: string,
    email: string
  ): Promise<string> {
    const token = await this.signToken(
      { id, email },
      envConfig.jwt.accessTokenSecret,
      "10m"
    );
    return token;
  }

  public verifyResetPasswordToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const resetToken = req?.query.token as string;

    if (!resetToken) {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: "Reset token is required.",
      });
    }

    try {
      const decoded = jwt.verify(
        resetToken,
        envConfig.jwt.accessTokenSecret
      ) as {
        id: string;
        email: string;
        exp: number;
      };

      if (Date.now() >= decoded.exp * 1000) {
        return res.status(401).json({
          statusCode: 401,
          success: false,
          message:
            "The reset link has expired. Please request a new password reset link.",
        });
      }

      req.user = decoded;
      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({
          statusCode: 401,
          success: false,
          message:
            "The reset link has expired. Please request a new password reset link.",
        });
      }
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: "Invalid reset token.",
      });
    }
  };

  public async generateFeedbackToken(email: string): Promise<string> {
    return await jwt.sign({ email }, envConfig.jwt.accessTokenSecret, {
      expiresIn: "24h",
    });
  }

  public verifyFeedbackToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.query.token as string;

      if (!token) {
        return res.status(400).json({ message: "Token is required" });
      }

      const decoded = jwt.verify(token, envConfig.jwt.accessTokenSecret) as {
        email: string;
      };

      req.body.email = decoded.email;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
}

export const JwtInstance = new JWT();
