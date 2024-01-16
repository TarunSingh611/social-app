import express from "express";
import {
like

} from "../controllers/reactionController/index.mjs";
const router = express.Router();

router.put("/like", like);

export default router;
