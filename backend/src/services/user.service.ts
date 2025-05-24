import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import ApiError from "../shared/apiError";
import { BcryptInstance } from "../shared/bcrypt";

class Service {
  async getAllUsers() {
    const users = await User.find({}).select("-password -__v");
    return users;
  }

  async getSingleUser(id: string) {
    const user = await User.findById(id).select("-password -__v");
    return user;
  }
  async userByEmailWithPassword(email: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(404, "User not found!");
    }
    return user;
  }

  async updateUser(id: string, updatedData: IUser) {
    await User.findByIdAndUpdate(id, { $set: { ...updatedData } });
  }

  async verifyUser(id: string) {
    await User.findByIdAndUpdate(id, { $set: { isVerified: true } });
  }

  async unVerifyUser(id: string) {
    await User.findByIdAndUpdate(id, { $set: { isVerified: false } });
  }

  async suspendUser(id: string) {
    await User.findByIdAndUpdate(id, { $set: { suspend: true } });
  }

  async unSuspendUser(id: string) {
    await User.findByIdAndUpdate(id, { $set: { suspend: false } });
  }

  async resetPassword(userId: string, newPassword: string): Promise<void> {
    const isExist = await User.findById(userId);
    if (!isExist) {
      throw new ApiError(404, "User was not found!");
    } else {
      const newHashedPassword = await BcryptInstance.hash(newPassword);
      await User.findByIdAndUpdate(userId, {
        $set: { password: newHashedPassword },
      });
    }
  }
}

export const UserService = new Service();
