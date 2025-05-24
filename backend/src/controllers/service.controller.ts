import { Request, Response } from "express";
import httpStatus from "http-status";
import { DeveloperService } from "../services/developerService.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  addService = this.catchAsync(async (req: Request, res: Response) => {
    await DeveloperService.addService(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Service added",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllServices = this.catchAsync(async (_req: Request, res: Response) => {
    const data = await DeveloperService.getAllServices();
    this.apiResponse(res, {
      success: true,
      message: "Services fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  getSingleService = this.catchAsync(async (req: Request, res: Response) => {
    const data = await DeveloperService.getSingleService(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Service fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  });

  editService = this.catchAsync(async (req: Request, res: Response) => {
    await DeveloperService.editService(req.params.id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Service updated successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  deleteService = this.catchAsync(async (req: Request, res: Response) => {
    await DeveloperService.deleteService(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Service deleted successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
}

export const ServiceController = new Controller();
