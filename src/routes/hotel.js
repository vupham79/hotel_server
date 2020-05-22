import { Router } from "express";
import * as HotelController from "../controllers/hotel";

const router = Router();

router.get("/:name", HotelController.getHotel);
router.get("/", HotelController.getAllHotel);
router.post("/", HotelController.createHotel);
router.patch("/:_id", HotelController.updateHotel);
router.delete("/:_id", HotelController.deleteHotel);

export default router;
