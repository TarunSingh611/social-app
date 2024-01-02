import express from "express";
import {feedGet} from "../controllers/feed/index.mjs";
const router = express.Router();

router.get("/", feedGet);

export default router;