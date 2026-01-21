import express from 'express';
import { createBlogCategory, getAllBlogCategory } from '../controllers/blogcategory.controller.js';

const router = express.Router();

router.get('/', getAllBlogCategory);
router.post('/', createBlogCategory);

export default router;
