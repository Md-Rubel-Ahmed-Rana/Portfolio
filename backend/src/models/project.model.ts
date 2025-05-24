import { Schema, model } from "mongoose";
import { IProject } from "../interfaces/project.interface";
import schemaOptions from "../utils/schemaOptions";

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    screenshots: [String],
    description: {
      type: String,
      required: true,
    },
    features: [String],
    techStack: [String],

    sourceCode: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
    },
    projectLength: {
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
      },
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
    projectStatus: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export const Project = model<IProject>("Project", projectSchema);
