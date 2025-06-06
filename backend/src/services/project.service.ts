import { IProject } from "../interfaces/project.interface";
import { Project } from "../models/project.model";
import ApiError from "../shared/apiError";
import compareArrayValues from "../utils/compareArrayValues";
import { SupabaseService } from "./supabase.service";

class Service {
  async addProject(data: IProject) {
    await Project.create(data);
  }

  async getAllProjects() {
    const data = await Project.find({})
      .populate("comments")
      .sort({ createdAt: -1 });
    return data;
  }

  async getSingleProject(id: string) {
    const data = await Project.findById(id).populate("comments");
    return data;
  }

  async editProject(id: string, data: IProject) {
    const isExist = await Project.findById(id);
    if (!isExist) {
      throw new ApiError(404, "Project was not found!");
    }
    if (isExist?.thumbnail !== data?.thumbnail) {
      SupabaseService.deleteFiles([isExist?.thumbnail]);
    }
    const isScreenshotsChanged = compareArrayValues(
      isExist?.screenshots,
      data?.screenshots
    );
    if (isScreenshotsChanged?.length > 0) {
      SupabaseService.deleteFiles(isScreenshotsChanged);
    }

    await Project.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteProject(id: string) {
    const isExist = await Project.findById(id);
    if (!isExist) {
      throw new ApiError(404, "Project was not found!");
    }
    SupabaseService.deleteFiles([...isExist?.screenshots, isExist?.thumbnail]);
    await Project.findByIdAndDelete(id);
  }
}
export const ProjectService = new Service();
