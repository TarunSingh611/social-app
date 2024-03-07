import express from "express";
import {
like

} from "../controllers/reactionController/index.mjs";
const router = express.Router();

router.put("/like/:contentType/:contentId", like);

export default router;
