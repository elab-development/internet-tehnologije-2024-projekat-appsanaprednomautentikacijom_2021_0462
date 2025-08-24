import { Router } from "express";
import UserController from "../controllers/UserController.mjs";
const router = Router();
const controller = new UserController();

router.post("/register", controller.register.bind(controller));

router.post("/confirm", controller.confirmRegister.bind(controller));

router.post("/login", controller.login.bind(controller));

router.post("/confirm2fa", controller.confirm2fa.bind(controller));

router.post("/confirmLogin", controller.confirmLogin.bind(controller));

export default router;

