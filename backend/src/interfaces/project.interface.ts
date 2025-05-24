import { Types } from "mongoose";

export type IProject = {
  name: string;
  subTitle: string;
  description: string;
  features: string[];
  techStack: string[];
  sourceCode: string;
  liveLink: string;
  projectStatus: string;
  category: string;
  screenshots: string[];
  thumbnail: string;
  comments: Types.ObjectId[];
  projectLength: {
    startDate: Date;
    endDate: Date;
  };
};
