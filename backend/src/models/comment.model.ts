import { Schema, model } from "mongoose";
import { IComment } from "../interfaces/comment.interface";
import schemaOptions from "../utils/schemaOptions";

const commentSchema = new Schema<IComment>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    comment: {
      type: String,
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "postType",
    },
    postType: {
      type: String,
      required: true,
      enum: ["Project", "Blog"],
    },
  },
  schemaOptions
);

export const Comment = model("Comment", commentSchema);
