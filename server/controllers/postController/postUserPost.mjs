import { getUserByToken } from "../../utils/jwtUtils.mjs";
import getUserPostsByUserId from "../../services/postService/getUserPostByUserId.mjs";

const userPost = async (req, res) => {
  const userId = req.query.userId;
  const pno = req.query.pno;

  const token = req.header("jwttoken");
  const tokenData = await getUserByToken(token);

  if (!tokenData) {
    return res.status(403).json({ message: "Forbidden: Invalid username" });
  }

  if (req.method === "GET") {
    try {
      if (userId == tokenData.userId) {
        const result = await getUserPostsByUserId(userId, pno);
        return res.json(result);
      } else {
        res.json({
          statusCode: 200,
          message: "Post fetched successfully",
          self: false,
        });
      }
    } catch (error) {
      console.error("Error in postImage controller:", error);
      res.json({ statusCode: 500, message: "Internal Server Error" });
    }
  }
};

export { userPost };
