import express from "express";
import {exploreGet} from "../controllers/explore/index.mjs";
import {exploreSearch} from "../controllers/explore/index.mjs";
const router = express.Router();

router.get("/", exploreGet);
router.get("/search", exploreSearch);

export default router;