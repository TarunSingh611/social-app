import {
  getPostComments,
  postPostComments,
  putPostComments,
  deletePostComments,
} from "../../services/postService/setPostComments.mjs";
import { getUserByToken } from "../../utils/jwtUtils.mjs";
function postComments(req, res) {
  const token = req.header("jwttoken");
  const tokenData = getUserByToken(token);

  if (!tokenData) {
    return res.status(403).json({ message: "Forbidden: Invalid username" });
  }
  const postId = req.query.postId;
  if (req.method === "GET") {
    const comments = getPostComments(postId);
    res.json(comments);
  } else if (req.method === "POST") {
    const data = req.body.comment;
    if (!data) {
      return res.json({ statusCode: 400, message: "Invalid data" });
    }
    const result = postPostComments(postId, tokenData.userId, data);
    res.json(result);
  } else if (req.method === "PUT") {
    const data = req.body.comment;
    const result = putPostComments(tokenData.userId, data._id);
    res.json(result);
  } else if (req.method === "DELETE") {
    const data = req.body.comment;
    const result = deletePostComments(postId, tokenData.userId, data._id);
    res.json(result);
  }
}

export { postComments };
