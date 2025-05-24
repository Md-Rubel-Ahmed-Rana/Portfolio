"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = require("express");
const blog_controller_1 = require("../controllers/blog.controller");
const supabaseMiddleware_1 = require("../middlewares/supabaseMiddleware");
const multer_1 = __importDefault(require("../config/multer"));
const router = (0, express_1.Router)();
router.post("/add-new-blog", multer_1.default.any(), supabaseMiddleware_1.SupabaseMiddleware.uploadBlogImages(), blog_controller_1.BlogController.addBlog);
router.get("/", blog_controller_1.BlogController.getAllBlogs);
router.get("/single/:id", blog_controller_1.BlogController.getSingleBlog);
router.patch("/update/:id", multer_1.default.any(), supabaseMiddleware_1.SupabaseMiddleware.updateBlogImages(), blog_controller_1.BlogController.updateBlog);
router.delete("/delete/:id", blog_controller_1.BlogController.deleteBlog);
exports.BlogRoutes = router;
