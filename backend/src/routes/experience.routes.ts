import { Router } from "express";
import { ExperienceController } from "../controllers/experience.controller";

const router = Router();

router.post("/add", ExperienceController.addExperience);

router.get("/", ExperienceController.getAllExperiences);

router.get(
  "/single/:id",

  ExperienceController.getSingleExperience
);

router.patch(
  "/update/:id",

  ExperienceController.updateExperience
);

router.delete(
  "/delete/:id",

  ExperienceController.deleteExperience
);

export const ExperienceRoutes = router;
