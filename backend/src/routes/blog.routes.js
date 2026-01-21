import express from "express";
import {
  createBlog,
  getBlog,
  getBlogDetails,
  getBlogsByAuthor,
  getBlogsByCategory,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlog);
router.post("/", createBlog);
router.get("/:slug", getBlogDetails);
router.get("/category/:slug", getBlogsByCategory);
router.get("/author/:id", getBlogsByAuthor);

export default router;
