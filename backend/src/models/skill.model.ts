import mongoose, { model, Schema } from "mongoose";
import { ISkill } from "../interfaces/skill.interface";
import schemaOptions from "../utils/schemaOptions";

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    serial: { type: Number, required: true, unique: true },
  },
  schemaOptions
);

export const Skill = model<ISkill>("Skill", SkillSchema);
