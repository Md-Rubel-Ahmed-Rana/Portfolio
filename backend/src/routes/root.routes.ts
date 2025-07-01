import { Router } from "express";
import { CourseRoutes } from "./course.routes";
import { ProjectRoutes } from "./project.routes";
import { UtilRoutes } from "./home.routes";
import { ExperienceRoutes } from "./experience.routes";
import { UserRoutes } from "./user.routes";
import { ServiceRoutes } from "./service.routes";
import { BlogRoutes } from "./blog.routes";
import { FeedbackRoutes } from "./feedback.routes";
import { CommentRoutes } from "./comment.routes";
import { MailRoutes } from "./mail.routes";
import { AuthRoutes } from "./auth.routes";
import { SkillRoutes } from "./skill.routes";
import { UserTrackRoutes } from "./userTrack.routes";
import { EducationRoutes } from "./education.routes";

const router = Router();

// course endpoints
router.use("/user", UserRoutes);

// course endpoints
router.use("/course", CourseRoutes);

// project endpoints
router.use("/project", ProjectRoutes);

// util endpoints
router.use("/home", UtilRoutes);

// experience endpoints
router.use("/experience", ExperienceRoutes);

// service endpoints
router.use("/service", ServiceRoutes);

// blog endpoints
router.use("/blog", BlogRoutes);

// feedback endpoints
router.use("/feedback", FeedbackRoutes);

// comment endpoints
router.use("/comment", CommentRoutes);

// mail endpoints
router.use("/mail", MailRoutes);

// auth endpoints
router.use("/auth", AuthRoutes);

// skill endpoints
router.use("/skill", SkillRoutes);

// skill endpoints
router.use("/user-track", UserTrackRoutes);

// education endpoints
router.use("/education", EducationRoutes);

export const RootRoute = router;
