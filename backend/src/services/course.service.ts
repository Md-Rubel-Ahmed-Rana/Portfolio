import { ICourse } from "../interfaces/course.interface";
import { Course } from "../models/course.model";

class Service {
  async addCourse(data: ICourse) {
    return await Course.create(data);
  }

  async getAllCourses() {
    return await Course.find({}).sort({ createdAt: -1 });
  }

  async getSingleCourse(id: string) {
    return await Course.findById(id);
  }

  async editCourse(id: string, data: ICourse) {
    return await Course.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteCourse(id: string) {
    return await Course.findByIdAndDelete(id);
  }
}

export const CourseService = new Service();
