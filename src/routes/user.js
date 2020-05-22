import { Router } from "express";
import * as UserController from "../controllers/user";
const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/booking", UserController.makeBooking);
router.post("/login", UserController.loginUser);
export default router;
