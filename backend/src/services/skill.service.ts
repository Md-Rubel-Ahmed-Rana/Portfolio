import { ISkill } from "../interfaces/skill.interface";
import { Skill } from "../models/skill.model";

class Service {
  async createSkill(skill: ISkill | ISkill[]) {
    return await Skill.create(skill);
  }

  async getAllSkills() {
    return await Skill.find({}).sort({ serial: 1 });
  }

  async getSkillById(id: string) {
    return await Skill.findById(id);
  }

  async updateSkill(id: string, updates: Partial<ISkill>) {
    return await Skill.findByIdAndUpdate(id, updates, { new: true });
  }

  async deleteSkill(id: string) {
    return await Skill.findByIdAndDelete(id);
  }
}

export const SkillService = new Service();
