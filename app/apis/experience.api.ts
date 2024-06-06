import { fetchFromApi } from ".";
import { IExperience } from "../types/experience.type";
import { rootApi } from "./rootApi";

export const getExperiences = async () => {
  return ((await fetchFromApi("experience")) as IExperience[]) || [];
};

export const getSingleExperience = async (id: string) => {
  return (
    ((await fetchFromApi(
      `${rootApi}/experience/single/${id}`
    )) as IExperience) || {}
  );
};
