import { fetchFromApi } from ".";
import { ICourse } from "../types/course.type";

export const getCourses = async () => {
  return ((await fetchFromApi("course")) as ICourse[]) || [];
};
export const getSingleCourse = async (id: string) => {
  return ((await fetchFromApi(`course/single/${id}`)) as ICourse) || {};
};
