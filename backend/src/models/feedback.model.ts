import { Schema, model } from "mongoose";
import { IFeedback } from "../interfaces/feedback.interface";
import schemaOptions from "../utils/schemaOptions";

const feedbackSchema = new Schema<IFeedback>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    designation: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  schemaOptions
);

export const Feedback = model<IFeedback>("Feedback", feedbackSchema);
