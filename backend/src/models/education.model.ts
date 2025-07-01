import { Schema, model } from "mongoose";
import { IEducation } from "../interfaces/education.interface";
import schemaOptions from "../utils/schemaOptions";

const educationSchema = new Schema<IEducation>(
  {
    degree: { type: String, required: true },
    field_of_study: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String },
    start_date: { type: String, required: true },
    end_date: { type: String },
    grade: { type: String },
    description: { type: String },
    is_current: { type: Boolean, default: false },
  },
  schemaOptions
);

export const Education = model("Education", educationSchema);
