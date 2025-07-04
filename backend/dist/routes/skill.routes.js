"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = require("express");
const skill_controller_1 = require("../controllers/skill.controller");
const router = (0, express_1.Router)();
router.post("/add-new-skill", skill_controller_1.SkillController.createSkill);
router.get("/", skill_controller_1.SkillController.getAllSkills);
router.get("/single/:id", skill_controller_1.SkillController.getSkillById);
router.patch("/update/:id", skill_controller_1.SkillController.updateSkill);
router.delete("/delete/:id", skill_controller_1.SkillController.deleteSkill);
exports.SkillRoutes = router;
