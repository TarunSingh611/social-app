import express from "express";
import multer from "multer";
import {
  postImage,
  postUserPost,
  postLikes,
  postComments,
} from "../controllers/postController/index.mjs";
const router = express.Router();
const upload = multer({dest:'public/'})

router.post("/imagePost", upload.single("file"), postImage);
router.get("/userPost", postUserPost);

router.get("/likes", postLikes);
router.delete("/likes", postLikes);
router.put("/likes", postLikes);

router.get("/comments", postComments);
router.post("/comments", postComments);
router.put("/comments", postComments);
router.delete("/comments", postComments);

export default router;
