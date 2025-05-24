import { Router } from "express";
import { SkillController } from "../controllers/skill.controller";

const router = Router();

router.post("/add-new-skill", SkillController.createSkill);

router.get("/", SkillController.getAllSkills);

router.get("/single/:id", SkillController.getSkillById);

router.patch("/update/:id", SkillController.updateSkill);

router.delete("/delete/:id", SkillController.deleteSkill);

export const SkillRoutes = router;
