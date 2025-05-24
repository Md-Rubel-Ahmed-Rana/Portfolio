import { Types } from "mongoose";

export type IBlog = {
  title: string;
  type: string;
  thumbnail: string | Express.Multer.File;
  tags: string[];
  body: IArticleSection[];
  comments: Types.ObjectId[];
};

export type IArticleSection = {
  title: string;
  images: string[] | Express.Multer.File[];
  description: string;
};
