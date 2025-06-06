import { IComment } from "../interfaces/comment.interface";
import { Comment } from "../models/comment.model";

class Service {
  async addComment(data: IComment) {
    await Comment.create(data);
  }

  async getAllComments(filter: string) {
    const filters = filter ? { post: filter } : {};
    return await Comment.find(filters)
      .populate({
        path: "post",
        select: {
          name: 1,
          title: 1,
        },
      })
      .sort({ createdAt: -1 });
  }

  async getCommentsForSpecificPost(postId: string) {
    return await Comment.find({ post: postId }).sort({ createdAt: -1 });
  }

  async getSingleComment(id: string) {
    const data = await Comment.findById(id);
    return data;
  }

  async updateComment(id: string, data: IComment) {
    return await Comment.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteComment(id: string) {
    return await Comment.findByIdAndDelete(id);
  }
}

export const CommentService = new Service();
