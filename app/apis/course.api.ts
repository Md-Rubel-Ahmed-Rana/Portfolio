import { ICourse } from "../types/course.type";
import { rootApi } from "./rootApi";

export const getCourses = async () => {
  try {
    const res = await fetch(`${rootApi}/course`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const courses = data.data as ICourse[];
      return courses;
    }
  } catch (error) {
    console.error("Error fetching courses data:", error);
    throw new Error("Failed to fetch courses data. Please try again later.");
  }
};
