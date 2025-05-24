"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilRoutes = void 0;
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const multer_1 = __importDefault(require("../config/multer"));
const supabaseMiddleware_1 = require("../middlewares/supabaseMiddleware");
const router = (0, express_1.Router)();
router.post("/initiate", home_controller_1.HomeController.initiateHome);
router.patch("/update/:id", home_controller_1.HomeController.updateHome);
router.patch("/logo/update/:id", multer_1.default.single("logo"), supabaseMiddleware_1.SupabaseMiddleware.updateWebsiteLogoImage(), home_controller_1.HomeController.updateLogo);
router.patch("/banner-image/update/:id", multer_1.default.single("bannerImage"), supabaseMiddleware_1.SupabaseMiddleware.updateWebsiteBannerImage(), home_controller_1.HomeController.updateBannerImage);
router.patch("/update/social-links/:id", home_controller_1.HomeController.updateSocialLinks);
router.get("/", home_controller_1.HomeController.getHome);
exports.UtilRoutes = router;
