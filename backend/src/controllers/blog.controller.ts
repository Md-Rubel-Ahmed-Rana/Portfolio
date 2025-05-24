import { Request, Response } from "express";
import httpStatus from "http-status";
import { BlogService } from "../services/blog.service";
import RootController from "../shared/rootController";
import { Types } from "mongoose";

class Controller extends RootController {
  addBlog = this.catchAsync(async (req, res) => {
    await BlogService.addBlog(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Blog added successfully",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllBlogs = this.catchAsync(async (req, res) => {
    const data = await BlogService.getAllBlogs();
    this.apiResponse(res, {
      success: true,
      message: "Blogs fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getSingleBlog = this.catchAsync(async (req, res) => {
    const id = req.params.id as unknown as Types.ObjectId;
    const data = await BlogService.getSingleBlog(id);
    this.apiResponse(res, {
      success: true,
      message: "Blog fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  updateBlog = this.catchAsync(async (req, res) => {
    const id = req.params.id as unknown as Types.ObjectId;
    await BlogService.updateBlog(id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Blog updated successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  deleteBlog = this.catchAsync(async (req, res) => {
    const id = req.params.id as unknown as Types.ObjectId;
    await BlogService.deleteBlog(id);
    this.apiResponse(res, {
      success: true,
      message: "Blog deleted successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
}

export const BlogController = new Controller();
