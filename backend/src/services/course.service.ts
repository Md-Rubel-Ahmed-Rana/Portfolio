import { ICourse } from "../interfaces/course.interface";
import { Course } from "../models/course.model";

class Service {
  async addCourse(data: ICourse) {
    await Course.create(data);
  }

  async getAllCourses() {
    const data = await Course.find({});
    return data;
  }

  async getSingleCourse(id: string) {
    const data = await Course.findById(id);
    return data;
  }

  async editCourse(id: string, data: ICourse) {
    await Course.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteCourse(id: string) {
    await Course.findByIdAndDelete(id);
  }
}

export const CourseService = new Service();
