import { IComment } from "../interfaces/comment.interface";
import { Comment } from "../models/comment.model";

class Service {
  async addComment(data: IComment) {
    await Comment.create(data);
  }

  async getAllComments(filter: string) {
    const filters = filter ? { post: filter } : {};
    const data = await Comment.find(filters).populate({
      path: "post",
      select: {
        name: 1,
        title: 1,
      },
    });
    return data;
  }

  async getCommentsForSpecificPost(postId: string) {
    const data = await Comment.find({ post: postId });
    return data;
  }

  async getSingleComment(id: string) {
    const data = await Comment.findById(id);
    return data;
  }

  async updateComment(id: string, data: IComment) {
    await Comment.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteComment(id: string) {
    await Comment.findByIdAndDelete(id);
  }
}

export const CommentService = new Service();
