import express from "express";
import { getItems, addItem } from "../controllers/itemController";

const router = express.Router();

router.get("/", getItems);
router.post("/", addItem);

export default router;
