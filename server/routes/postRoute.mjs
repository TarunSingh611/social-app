import express from "express";
import {
  postCreate,
  postPut,
  postGet,
  postDelete,
  postFeed,
  postReaction,
} from "../controllers/postController/postController.mjs";
const router = express.Router();

router.post("/create", postCreate);
router.put("/update", postPut);
router.get("/get", postGet);
router.delete("/delete", postDelete);
router.get("/feed", postFeed);
router.put("/reaction", postReaction);

export default router;
