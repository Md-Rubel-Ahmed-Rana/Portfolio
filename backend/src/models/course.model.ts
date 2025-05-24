import { Schema, model } from "mongoose";
import { ICourse } from "../interfaces/course.interface";
import schemaOptions from "../utils/schemaOptions";

const courseSchema = new Schema<ICourse>(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    courseDetails: {
      type: [String],
      required: true,
    },
  },
  schemaOptions
);

export const Course = model<ICourse>("Course", courseSchema);
