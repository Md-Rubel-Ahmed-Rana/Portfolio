"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = require("express");
const experience_controller_1 = require("../controllers/experience.controller");
const router = (0, express_1.Router)();
router.post("/add", experience_controller_1.ExperienceController.addExperience);
router.get("/", experience_controller_1.ExperienceController.getAllExperiences);
router.get("/single/:id", experience_controller_1.ExperienceController.getSingleExperience);
router.patch("/update/:id", experience_controller_1.ExperienceController.updateExperience);
router.delete("/delete/:id", experience_controller_1.ExperienceController.deleteExperience);
exports.ExperienceRoutes = router;
