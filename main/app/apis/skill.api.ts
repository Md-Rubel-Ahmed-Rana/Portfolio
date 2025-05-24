import { fetchFromApi } from ".";
import { ISkill } from "../types/skill.type";

export const getSkillData = async () => {
  return ((await fetchFromApi(`skill`)) as ISkill[]) || [];
};
