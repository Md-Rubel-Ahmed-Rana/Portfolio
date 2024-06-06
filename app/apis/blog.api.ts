import { fetchFromApi } from ".";
import { IBlog } from "../types/blog.type";

export const getBlogData = async () => {
  return (await fetchFromApi("blog")) as IBlog[];
};

export const getSingleBlogData = async (id: string) => {
  return (await fetchFromApi(`blog/single/${id}`)) as IBlog;
};
