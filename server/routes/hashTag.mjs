import express from "express";
import {
  hashTagTrend,
  hashTagSearch,
  hashTagFeed,
} from "../controllers/hashTagController/hashTagController.mjs";
const router = express.Router();

router.get("/trend", hashTagTrend);
router.get("/search", hashTagSearch);
router.get("/feed", hashTagFeed);

export default router;
