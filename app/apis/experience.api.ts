import { IExperience } from "../types/experience.type";
import { rootApi } from "./rootApi";

export const getExperiences = async () => {
  try {
    const res = await fetch(`${rootApi}/experience`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const experiences = data.data as IExperience[];
      return experiences;
    }
  } catch (error) {
    console.error("Error fetching experiences data:", error);
    throw new Error(
      "Failed to fetch experiences data. Please try again later."
    );
  }
};
