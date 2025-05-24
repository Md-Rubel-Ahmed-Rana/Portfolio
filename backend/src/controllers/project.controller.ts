import { Request, Response } from "express";
import httpStatus from "http-status";
import { ProjectService } from "../services/project.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  addProject = this.catchAsync(async (req: Request, res: Response) => {
    await ProjectService.addProject(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Project added",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllProjects = this.catchAsync(async (_req: Request, res: Response) => {
    const data = await ProjectService.getAllProjects();
    this.apiResponse(res, {
      success: true,
      message: "Projects fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getSingleProject = this.catchAsync(async (req: Request, res: Response) => {
    const data = await ProjectService.getSingleProject(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Project fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  editProject = this.catchAsync(async (req: Request, res: Response) => {
    await ProjectService.editProject(req.params.id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Project updated successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  deleteProject = this.catchAsync(async (req: Request, res: Response) => {
    await ProjectService.deleteProject(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Project deleted successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
}

export const ProjectController = new Controller();
