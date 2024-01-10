import { getUserByToken } from "../../utils/jwtUtils.mjs";
import getFeedService from "../../services/feedService/getFeed.mjs";
import User from "../../models/userModel.mjs";

async function feedGet(req,res) {
    const token = req.header("jwttoken");
    const tokenData = await getUserByToken(token)
    if (! tokenData) {
        return res.status(403).json({ message: 'Forbidden: Invalid username' });
    }
    const user = await User.findById(tokenData.userId);
    if (!user) {
      throw new Error('User not found');
    }
    const result = await getFeedService(user);
    res.json(result);
}
export { feedGet}