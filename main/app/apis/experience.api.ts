import { fetchFromApi } from ".";
import { IExperience } from "../types/experience.type";

export const getExperiences = async () => {
  return ((await fetchFromApi("experience")) as IExperience[]) || [];
};

export const getSingleExperience = async (id: string) => {
  return ((await fetchFromApi(`experience/single/${id}`)) as IExperience) || {};
};
