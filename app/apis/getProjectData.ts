import { IProject } from "../types/project.type";

export const getProjectData = async () => {
  try {
    const res = await fetch(
      "https://portfolio-backend-v2-p89h.onrender.com/api/v2/project",
      {
        next: {
          revalidate: 10,
        },
      }
    );

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
