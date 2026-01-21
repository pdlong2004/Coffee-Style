import express from 'express';
import { createAuthor, getAuthor } from '../controllers/author.controller.js';

const router = express.Router();

router.get('/', getAuthor);
router.post('/', createAuthor);

export default router;
