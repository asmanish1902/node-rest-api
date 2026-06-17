import { Router } from "express";
import userController from "./user.controller.js";
import authenticate from "../../middlewares/auth.middleware.js";

const router = Router();

router.get("/me", authenticate, userController.getProfile);

router.post("/", userController.createUser);

router.get('/:id', userController.getUser);


export default router;