import { getUserByToken } from "../../utils/jwtUtils.mjs";
import setPicture from "../../services/userService/setPicture.mjs";
const userSetPicture = async (req, res) => {
  const token = req.header("jwttoken");
  const tokenData = await getUserByToken(token);

  if (!tokenData) {
    return res.status(403).json({ message: "Forbidden: Invalid username" });
  }
  console.log("req::",req.body.type)
  const result = await setPicture(tokenData.userId, req.file, req.body.type);
  console.log(result)
  res.json(result);
};

export { userSetPicture };
