import httpStatus from "http-status";
import RootController from "../shared/rootController";
import { SkillService } from "../services/skill.service";

class Controller extends RootController {
  createSkill = this.catchAsync(async (req, res) => {
    const skill = await SkillService.createSkill(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Skill created successfully",
      statusCode: httpStatus.CREATED,
      data: skill,
    });
  });

  getAllSkills = this.catchAsync(async (_req, res) => {
    const skills = await SkillService.getAllSkills();
    this.apiResponse(res, {
      success: true,
      message: "Skills fetched successfully",
      statusCode: httpStatus.OK,
      data: skills,
    });
  });

  getSkillById = this.catchAsync(async (req, res) => {
    const skill = await SkillService.getSkillById(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Skill fetched successfully",
      statusCode: httpStatus.OK,
      data: skill,
    });
  });

  updateSkill = this.catchAsync(async (req, res) => {
    await SkillService.updateSkill(req.params.id, req.body);
    this.apiResponse(res, {
      success: true,
      message: "Skill updated successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });

  deleteSkill = this.catchAsync(async (req, res) => {
    await SkillService.deleteSkill(req.params.id);
    this.apiResponse(res, {
      success: true,
      message: "Skill deleted successfully",
      statusCode: httpStatus.OK,
      data: null,
    });
  });
}

export const SkillController = new Controller();
