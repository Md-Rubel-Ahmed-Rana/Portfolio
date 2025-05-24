import { Request, Response } from "express";
import { ExperienceService } from "../services/experience.service";
import httpStatus from "http-status";
import RootController from "../shared/rootController";

class Controller extends RootController {
  addExperience = this.catchAsync(async (req: Request, res: Response) => {
    await ExperienceService.addExperience(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Experience added",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllExperiences = this.catchAsync(async (_req: Request, res: Response) => {
    const data = await ExperienceService.getAllExperiences();
    this.apiResponse(res, {
      success: true,
      message: "Experiences fetched",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getSingleExperience = this.catchAsync(async (req: Request, res: Response) => {
    const data = await ExperienceService.getSingleExperience(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Experience fetched",
      statusCode: httpStatus.OK,
      data,
    });
  });

  updateExperience = this.catchAsync(async (req: Request, res: Response) => {
    const data = await ExperienceService.updateExperience(
      req.params.id,
      req.body
    );
    this.apiResponse(res, {
      success: true,
      message: "Experience updated",
      statusCode: httpStatus.OK,
      data,
    });
  });

  deleteExperience = this.catchAsync(async (req: Request, res: Response) => {
    const data = await ExperienceService.deleteExperience(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Experience deleted",
      statusCode: httpStatus.OK,
      data,
    });
  });
}

export const ExperienceController = new Controller();
