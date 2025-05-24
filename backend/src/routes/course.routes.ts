import { Router } from "express";
import { CourseController } from "../controllers/course.controller";

const router = Router();

router.post("/add", CourseController.addCourse);

router.get("/", CourseController.getAllCourses);

router.get("/single/:id", CourseController.getSingleCourse);

router.patch("/update/:id", CourseController.editCourse);

router.delete("/delete/:id", CourseController.deleteCourse);

export const CourseRoutes = router;
