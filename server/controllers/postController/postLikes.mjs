import {
  getLikes,
  deleteLikes,
  putLikes,
} from "../../services/postService/setPostLikes.mjs";
import { getUserByToken } from "../../utils/jwtUtils.mjs";
async function postLikes(req, res) {
  const token = req.header("jwttoken");
  const tokenData = await getUserByToken(token);
  if (!tokenData) {
    res.status(403).json({ message: "Forbidden: Invalid username" });
  }

  const postId = req.query.postId;

  if (req.method === "GET") {
    const likes = await getLikes(postId);
    res.json(likes);
  } else if (req.method === "DELETE") {
    const result = await deleteLikes(postId, tokenData.userId);
    res.json(result);
  } else if (req.method === "PUT") {
    const result = await putLikes(postId, tokenData.userId);
    res.json(result);
  }
}

export { postLikes };
