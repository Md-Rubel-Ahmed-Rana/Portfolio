import { Schema, model } from "mongoose";
import { IExperience } from "../interfaces/experience.interface";
import schemaOptions from "../utils/schemaOptions";

const experienceSchema = new Schema<IExperience>(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    workType: {
      type: String,
      required: true,
    },
    workLocation: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    website: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    responsibilities: [String],
    learnedNewTech: [String],
  },
  schemaOptions
);

export const Experience = model<IExperience>("Experience", experienceSchema);
