import { getUserByToken } from "../../utils/jwtUtils.mjs";
import setImagePost from "../../services/postService/setImagePost.mjs";
const postImage = async (req, res) => {
  try {
  const token = req.header("jwttoken");
  const tokenData = await getUserByToken(token);
  if (!tokenData) {
    return res.status(403).json({ message: "Forbidden: Invalid username" });
  }
  const file = req.file;
  const hashTags = req.body.hashtags;
  const caption = req.body.caption;

  if (!file) {
    return res.status(400).json({ statusCode: 400, message: "File not found" });
  }

  const result = await setImagePost(tokenData.userId, file, hashTags, caption);

  console.log(result);
  res.json(result);
}
catch(error) {
  console.error("Error in postImage controller:", error);
  res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
}
}

export { postImage };
