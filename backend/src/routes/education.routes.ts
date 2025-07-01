import { Router } from "express";
import { EducationController } from "../controllers/education.controller";

const router = Router();

router.post("/", EducationController.addEducation);

router.get("/", EducationController.getAllEducations);

router.get("/:id", EducationController.getEducationById);

router.put("/:id", EducationController.updateEducation);

router.delete("/:id", EducationController.deleteEducation);

export const EducationRoutes = router;
