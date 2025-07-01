import { IEducation } from "../interfaces/education.interface";
import { Education } from "../models/education.model";

class Service {
  async addEducation(data: IEducation | IEducation[]) {
    return await Education.create(data);
  }

  async getAllEducations() {
    return await Education.find().sort({ start_date: -1 });
  }

  async getEducationById(id: string) {
    return await Education.findById(id);
  }

  async updateEducation(id: string, data: Partial<IEducation>) {
    return await Education.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteEducation(id: string) {
    return await Education.findByIdAndDelete(id);
  }
}

export const EducationService = new Service();
