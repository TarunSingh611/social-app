import express from "express";
import multer from "multer";
import {
  postCreate,
  postImage,
  postPut,
  postGet,
  postDelete,
  postFeed,
  postReaction,
  postUserPost,
} from "../controllers/postController/index.mjs";
const router = express.Router();
const upload = multer({dest:'public/'})

router.post("/imagePost", upload.single("file"), postImage);
router.post("/create", postCreate);
router.put("/update", postPut);
router.get("/get", postGet);
router.delete("/delete", postDelete);
router.get("/feed", postFeed);
router.put("/reaction", postReaction);
router.get("/userPost", postUserPost);

export default router;
