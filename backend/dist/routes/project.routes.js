"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const supabaseMiddleware_1 = require("../middlewares/supabaseMiddleware");
const multer_1 = __importDefault(require("../config/multer"));
const router = (0, express_1.Router)();
router.post("/add-new-project", multer_1.default.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "screenshots", maxCount: 5 },
]), supabaseMiddleware_1.SupabaseMiddleware.uploadProjectImages(), project_controller_1.ProjectController.addProject);
router.get("/", project_controller_1.ProjectController.getAllProjects);
router.get("/single/:id", project_controller_1.ProjectController.getSingleProject);
router.patch("/update/:id", multer_1.default.any(), supabaseMiddleware_1.SupabaseMiddleware.updateProjectImages(), project_controller_1.ProjectController.editProject);
router.delete("/delete/:id", project_controller_1.ProjectController.deleteProject);
exports.ProjectRoutes = router;
