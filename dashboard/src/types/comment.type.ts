import { IBlog } from "./blog.type";

export type IComment = {
  id: string;
  name: string;
  image: string;
  comment: string;
  post: IBlog;
  postId: IBlog;
  suspend: boolean;
  postType: "Project" | "Blog";
  createdAt: Date;
  updatedAt: Date;
};
