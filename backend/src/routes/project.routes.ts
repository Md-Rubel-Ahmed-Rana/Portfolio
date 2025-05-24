import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";
import { SupabaseMiddleware } from "../middlewares/supabaseMiddleware";
import upload from "../config/multer";

const router = Router();

router.post(
  "/add-new-project",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "screenshots", maxCount: 5 },
  ]),
  SupabaseMiddleware.uploadProjectImages(),
  ProjectController.addProject
);

router.get("/", ProjectController.getAllProjects);

router.get("/single/:id", ProjectController.getSingleProject);

router.patch(
  "/update/:id",
  upload.any(),
  SupabaseMiddleware.updateProjectImages(),
  ProjectController.editProject
);

router.delete("/delete/:id", ProjectController.deleteProject);

export const ProjectRoutes = router;
