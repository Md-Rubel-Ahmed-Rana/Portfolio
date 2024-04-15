import { IBlog } from "../types/blog.type";

export const getBlogData = async () => {
  try {
    const res = await fetch(
      "https://portfolio-backend-v2-p89h.onrender.com/api/v2/blog",
      {
        next: {
          revalidate: 10,
        },
      }
    );

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
