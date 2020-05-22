import { Router } from "express";
import * as AdminController from "../controllers/admin";
const router = Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/booking", AdminController.getAllBookings);

export default router;
