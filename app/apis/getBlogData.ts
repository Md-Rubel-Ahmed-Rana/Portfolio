import { IBlog } from "../types/blog.type";
import { rootApi } from "./rootApi";

export const getBlogData = async () => {
  try {
    const res = await fetch(`${rootApi}/blog`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const blogData = data.data as IBlog[];
      return blogData;
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
    throw new Error("Failed to fetch project data. Please try again later.");
  }
};
