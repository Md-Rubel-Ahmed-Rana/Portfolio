import { IExperience } from "../interfaces/experience.interface";
import { Experience } from "../models/experience.model";

class Service {
  async addExperience(data: IExperience) {
    await Experience.create(data);
  }

  async getAllExperiences() {
    const data = await Experience.find({}).sort({ createdAt: -1 });
    return data;
  }

  async getSingleExperience(id: string) {
    const data = await Experience.findById(id);
    return data;
  }

  async updateExperience(id: string, data: IExperience) {
    await Experience.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteExperience(id: string) {
    await Experience.findByIdAndDelete(id);
  }
}
export const ExperienceService = new Service();
