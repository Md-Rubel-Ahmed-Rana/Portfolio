import { Request, Response } from "express";
import httpStatus from "http-status";
import { HomeService } from "../services/home.service";
import RootController from "../shared/rootController";
import { Types } from "mongoose";

class Controller extends RootController {
  initiateHome = this.catchAsync(async (req: Request, res: Response) => {
    await HomeService.initiateHome(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Util initiated",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  updateHome = this.catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as unknown as Types.ObjectId;
    await HomeService.updateHome(id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Home data updated",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  updateSocialLinks = this.catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as unknown as Types.ObjectId;
    await HomeService.updateSocialLinks(id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Social links added",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
  updateLogo = this.catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as unknown as Types.ObjectId;
    await HomeService.updateLogo(id, req.body.url);
    this.apiResponse(res, {
      success: true,
      message: "Website logo updated successfully!",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
  updateBannerImage = this.catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id as unknown as Types.ObjectId;
    await HomeService.updateBannerImage(id, req.body.url);
    this.apiResponse(res, {
      success: true,
      message: "Website banner image updated successfully!",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  getHome = this.catchAsync(async (_req: Request, res: Response) => {
    const data = await HomeService.getHome();
    this.apiResponse(res, {
      success: true,
      message: "Util data fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });
}

export const HomeController = new Controller();
