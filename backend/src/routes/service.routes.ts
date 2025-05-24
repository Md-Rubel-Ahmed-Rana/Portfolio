import { Router } from "express";
import { ServiceController } from "../controllers/service.controller";
import upload from "../config/multer";
import { SupabaseMiddleware } from "../middlewares/supabaseMiddleware";

const router = Router();

router.post(
  "/add-new-service",
  upload.single("image"),
  SupabaseMiddleware.uploadSingleFile("services", "image"),
  ServiceController.addService
);

router.get("/", ServiceController.getAllServices);

router.get("/single/:id", ServiceController.getSingleService);

router.patch(
  "/update/:id",
  upload.single("image"),
  SupabaseMiddleware.uploadSingleFile("services", "image"),
  ServiceController.editService
);

router.delete("/delete/:id", ServiceController.deleteService);

export const ServiceRoutes = router;
