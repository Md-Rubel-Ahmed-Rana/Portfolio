import { IProject } from "../types/project.type";
import { rootApi } from "./rootApi";

export const getSingleProjectData = async (id: string) => {
  try {
    const res = await fetch(`${rootApi}/project/single/${id}`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const project = data.data as IProject;
      return project;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching project data:", error);
    throw new Error("Failed to fetch project data. Please try again later.");
  }
};
