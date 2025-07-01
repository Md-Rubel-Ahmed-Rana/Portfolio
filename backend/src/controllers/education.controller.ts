import httpStatus from "http-status";
import { EducationService } from "../services/education.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  addEducation = this.catchAsync(async (req, res) => {
    const result = await EducationService.addEducation(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Education added successfully",
      statusCode: httpStatus.CREATED,
      data: result,
    });
  });

  getAllEducations = this.catchAsync(async (req, res) => {
    const result = await EducationService.getAllEducations();
    this.apiResponse(res, {
      success: true,
      message: "Educations retrieved successfully",
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  getEducationById = this.catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await EducationService.getEducationById(id);

    if (!result) {
      return this.apiResponse(res, {
        success: false,
        message: "Education not found",
        statusCode: httpStatus.NOT_FOUND,
        data: null,
      });
    }

    this.apiResponse(res, {
      success: true,
      message: "Education retrieved successfully",
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  updateEducation = this.catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await EducationService.updateEducation(id, req.body);

    if (!result) {
      return this.apiResponse(res, {
        success: false,
        message: "Education not found",
        statusCode: httpStatus.NOT_FOUND,
        data: null,
      });
    }

    this.apiResponse(res, {
      success: true,
      message: "Education updated successfully",
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  deleteEducation = this.catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await EducationService.deleteEducation(id);

    if (!result) {
      return this.apiResponse(res, {
        success: false,
        message: "Education not found",
        statusCode: httpStatus.NOT_FOUND,
        data: null,
      });
    }

    this.apiResponse(res, {
      success: true,
      message: "Education deleted successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
}

export const EducationController = new Controller();
