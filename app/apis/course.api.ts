import { fetchFromApi } from ".";
import { ICourse } from "../types/course.type";
import { rootApi } from "./rootApi";

export const getCourses = async () => {
  return ((await fetchFromApi("course")) as ICourse[]) || [];
};
export const getSingleCourse = async (id: string) => {
  return (
    ((await fetchFromApi(`${rootApi}/course/single/${id}`)) as ICourse) || {}
  );
};
