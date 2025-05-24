import { Router } from "express";
import { HomeController } from "../controllers/home.controller";
import upload from "../config/multer";
import { SupabaseMiddleware } from "../middlewares/supabaseMiddleware";

const router = Router();

router.post("/initiate", HomeController.initiateHome);

router.patch("/update/:id", HomeController.updateHome);

router.patch(
  "/logo/update/:id",
  upload.single("logo"),
  SupabaseMiddleware.updateWebsiteLogoImage(),
  HomeController.updateLogo
);

router.patch(
  "/banner-image/update/:id",
  upload.single("bannerImage"),
  SupabaseMiddleware.updateWebsiteBannerImage(),
  HomeController.updateBannerImage
);

router.patch("/update/social-links/:id", HomeController.updateSocialLinks);

router.get("/", HomeController.getHome);

export const UtilRoutes = router;
