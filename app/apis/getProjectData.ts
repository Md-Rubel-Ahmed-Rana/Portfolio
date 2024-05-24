import { IProject } from "../types/project.type";
import { rootApi } from "./rootApi";

export const getProjectData = async () => {
  try {
    const res = await fetch(`${rootApi}/project`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const projectData = data.data as IProject[];
      return projectData;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching project data:", error);
    throw new Error("Failed to fetch project data. Please try again later.");
  }
};
