"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRoute = void 0;
const express_1 = require("express");
const course_routes_1 = require("./course.routes");
const project_routes_1 = require("./project.routes");
const home_routes_1 = require("./home.routes");
const experience_routes_1 = require("./experience.routes");
const user_routes_1 = require("./user.routes");
const service_routes_1 = require("./service.routes");
const blog_routes_1 = require("./blog.routes");
const feedback_routes_1 = require("./feedback.routes");
const comment_routes_1 = require("./comment.routes");
const mail_routes_1 = require("./mail.routes");
const auth_routes_1 = require("./auth.routes");
const skill_routes_1 = require("./skill.routes");
const router = (0, express_1.Router)();
// course endpoints
router.use("/user", user_routes_1.UserRoutes);
// course endpoints
router.use("/course", course_routes_1.CourseRoutes);
// project endpoints
router.use("/project", project_routes_1.ProjectRoutes);
// util endpoints
router.use("/home", home_routes_1.UtilRoutes);
// experience endpoints
router.use("/experience", experience_routes_1.ExperienceRoutes);
// service endpoints
router.use("/service", service_routes_1.ServiceRoutes);
// blog endpoints
router.use("/blog", blog_routes_1.BlogRoutes);
// feedback endpoints
router.use("/feedback", feedback_routes_1.FeedbackRoutes);
// comment endpoints
router.use("/comment", comment_routes_1.CommentRoutes);
// mail endpoints
router.use("/mail", mail_routes_1.MailRoutes);
// auth endpoints
router.use("/auth", auth_routes_1.AuthRoutes);
// skill endpoints
router.use("/skill", skill_routes_1.SkillRoutes);
exports.RootRoute = router;
