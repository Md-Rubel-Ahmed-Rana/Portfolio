import { Types } from "mongoose";

export type IComment = {
  name: string;
  image: string;
  comment: string;
  post: Types.ObjectId;
  postType: "Project" | "Blog";
};
