import { User } from "../models/user.model";
import { IUser } from "../interfaces/user.interface";
import ApiError from "../shared/apiError";
import { UserService } from "./user.service";
import { JwtInstance } from "../shared/jwt";
import { MailServices } from "./mail.service";
import { envConfig } from "../config/envConfig";
import { BcryptInstance } from "../shared/bcrypt";

class Service {
  async registerUser(user: IUser) {
    const hashedPassword = await BcryptInstance.hash(user.password);
    user.password = hashedPassword;
    await User.create(user);
  }

  async loginUser(
    email: string,
    password: string
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const isExist = await UserService.userByEmailWithPassword(email);
    if (!isExist) {
      throw new ApiError(400, "User not found");
    }
    const isPassMatched = await BcryptInstance.compare(
      password,
      isExist.password
    );
    if (!isPassMatched) {
      throw new ApiError(400, "Password is incorrect");
    } else {
      const payload = {
        id: isExist?.id,
        email: isExist?.email,
      };

      const accessToken = await JwtInstance.generateAccessToken(payload);
      const refreshToken = await JwtInstance.generateRefreshToken(payload);
      return {
        accessToken: `Bearer ${accessToken}`,
        refreshToken: `Bearer ${refreshToken}`,
      };
    }
  }

  async auth(id: string) {
    return await UserService.getSingleUser(id);
  }

  async forgetPassword(email: string): Promise<void> {
    const user: any = await UserService.userByEmailWithPassword(email);
    const token = await JwtInstance.generatePasswordResetToken(
      user?._id,
      user?.email
    );
    const resetUrl = `${envConfig.origins[2]}/auth/reset-password?id=${user?._id}&name=${user?.name}&email=${user?.email}&token=${token}`;
    await MailServices.resetPasswordLink(user?.email, resetUrl);
  }
}
export const AuthService = new Service();
