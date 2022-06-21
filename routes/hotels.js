import express from "express";
const router = express.Router();
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/Hotel.Controller.js';
import { verifyAdmin} from "../utils/verifyToken.js";

//CREATE
router.post('/', verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getHotels);

export default router;
