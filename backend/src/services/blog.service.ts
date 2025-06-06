import { Types } from "mongoose";
import { IBlog } from "../interfaces/blog.interface";
import { Blog } from "../models/blog.model";
import ApiError from "../shared/apiError";
import { SupabaseService } from "./supabase.service";
import compareArrayValues from "../utils/compareArrayValues";

class Service {
  async addBlog(data: IBlog) {
    await Blog.create(data);
  }

  async getAllBlogs() {
    return await Blog.find({}).populate("comments").sort({ createdAt: -1 });
  }

  async getSingleBlog(id: Types.ObjectId) {
    await this.isBlogExist(id);
    return await Blog.findById(id).populate("comments").sort({ createdAt: -1 });
  }

  async updateBlog(id: Types.ObjectId, data: IBlog) {
    const isExist = await this.isBlogExist(id);
    const oldImages = this.extractBlogImages(isExist);
    const newImages = this.extractBlogImages(data);

    const deletableImages = compareArrayValues(oldImages, newImages);

    if (deletableImages?.length > 0) {
      SupabaseService.deleteFiles(deletableImages);
    }
    await Blog.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteBlog(id: Types.ObjectId) {
    const isExist = await this.isBlogExist(id);

    const deletableImages = this.extractBlogImages(isExist);

    if (deletableImages?.length > 0) {
      SupabaseService.deleteFiles(deletableImages);
    }

    await Blog.findByIdAndDelete(id);
  }

  private extractBlogImages(blog: IBlog): string[] {
    let images = (blog?.thumbnail ? [blog?.thumbnail] : []) as string[];

    blog?.body?.map((section) => {
      images = [...images, ...section?.images] as string[];
    });

    return images;
  }

  private async isBlogExist(id: Types.ObjectId): Promise<IBlog> {
    const isExist = await Blog.findById(id);
    if (!isExist) {
      throw new ApiError(404, "Blog was not found!");
    }

    return isExist;
  }
}

export const BlogService = new Service();
