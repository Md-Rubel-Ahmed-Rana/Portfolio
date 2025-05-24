import { fetchFromApi } from ".";
import { IProject } from "../types/project.type";

export const getProjectData = async () => {
  return (await fetchFromApi("project")) as IProject[];
};

export const getSingleProjectData = async (id: string) => {
  return (await fetchFromApi(`project/single/${id}`)) as IProject;
};
