import { Router } from "express";

import authController from "./auth.controller.js";

import validate from "../../middlewares/validate.middleware.js";

import { registerSchema, loginSchema, refreshTokenSchema } from "./auth.validation.js";

const router = Router();

router.post("/register", validate(registerSchema), authController.register);

router.post("/login", validate(loginSchema), authController.login);

router.post("/refresh-token", validate(refreshTokenSchema), authController.refreshToken);

export default router;