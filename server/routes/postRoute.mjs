import express from "express";
import multer from "multer";
import {
  postImage,
  postUserPost,
  postComments,
  updateUserPostController,
} from "../controllers/postController/index.mjs";
const router = express.Router();
const upload = multer({dest:'public/'})

router.post("/imagePost", upload.single("file"), postImage);
router.get("/userPost", postUserPost);

router.get("/updateUserPost", updateUserPostController);
router.put("/updateUserPost", updateUserPostController);
router.delete("/updateUserPost", updateUserPostController); 

router.get("/comments", postComments);
router.post("/comments", postComments);
router.put("/comments", postComments);
router.delete("/comments", postComments);

export default router;
