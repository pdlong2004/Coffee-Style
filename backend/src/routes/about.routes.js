import express from "express";
import { createAbout, getAbout } from "../controllers/about.controller.js";

const router = express.Router();

router.get("/", getAbout);
router.post("/", createAbout);

export default router;
