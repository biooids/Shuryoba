import express from "express";
import { userSignUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", userSignUp);

export default router;
