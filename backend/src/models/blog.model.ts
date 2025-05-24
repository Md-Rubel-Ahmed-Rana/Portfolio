import { Schema, model } from "mongoose";
import { IArticleSection, IBlog } from "../interfaces/blog.interface";
import schemaOptions from "../utils/schemaOptions";

const articleSectionSchema = new Schema<IArticleSection>(
  {
    title: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
  },
  schemaOptions
);

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    type: {
      type: String,
    },
    tags: [String],
    body: [articleSectionSchema],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
  },
  schemaOptions
);

export const Blog = model<IBlog>("Blog", blogSchema);
