import { fetchFromApi } from ".";
import { IEducation } from "../types/education.type";

export const getEducationData = async () => {
  return (await fetchFromApi("education")) as IEducation[];
};
