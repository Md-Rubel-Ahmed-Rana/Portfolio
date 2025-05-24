import { Request, Response } from "express";
import httpStatus from "http-status";
import { CourseService } from "../services/course.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  addCourse = this.catchAsync(async (req: Request, res: Response) => {
    await CourseService.addCourse(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Course added",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllCourses = this.catchAsync(async (_req: Request, res: Response) => {
    const data = await CourseService.getAllCourses();
    this.apiResponse(res, {
      success: true,
      message: "Courses fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getSingleCourse = this.catchAsync(async (req: Request, res: Response) => {
    const data = await CourseService.getSingleCourse(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Course fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  editCourse = this.catchAsync(async (req: Request, res: Response) => {
    await CourseService.editCourse(req.params.id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Course updated successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  deleteCourse = this.catchAsync(async (req: Request, res: Response) => {
    await CourseService.deleteCourse(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Course deleted successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
}

export const CourseController = new Controller();
