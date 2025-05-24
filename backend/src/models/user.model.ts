import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import schemaOptions from "../utils/schemaOptions";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    suspend: {
      type: Boolean,
      default: false,
    },
  },
  schemaOptions
);

export const User = model<IUser>("User", userSchema);
