import { Router } from "express";
import { BlogController } from "../controllers/blog.controller";
import { SupabaseMiddleware } from "../middlewares/supabaseMiddleware";
import upload from "../config/multer";

const router = Router();

router.post(
  "/add-new-blog",
  upload.any(),
  SupabaseMiddleware.uploadBlogImages(),
  BlogController.addBlog
);

router.get("/", BlogController.getAllBlogs);

router.get("/single/:id", BlogController.getSingleBlog);

router.patch(
  "/update/:id",
  upload.any(),
  SupabaseMiddleware.updateBlogImages(),
  BlogController.updateBlog
);

router.delete("/delete/:id", BlogController.deleteBlog);

export const BlogRoutes = router;
