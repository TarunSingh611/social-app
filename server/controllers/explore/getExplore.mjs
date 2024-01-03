import { getUserByToken } from "../../utils/jwtUtils.mjs";
import getExploreService from "../../services/exploreService/getExplore.mjs";
import {User} from "../../models/userModel.mjs";

async function exploreGet(req,res) {
    const token = req.header("jwttoken");
    const tokenData = await getUserByToken(token)
    if (! tokenData) {
        return res.status(403).json({ message: 'Forbidden: Invalid username' });
    }
    const user = await User.findById(tokenData.userId);
    if (!user) {
      throw new Error('User not found');
    }
    const result = await getExploreService(user);
    res.json(result);
}
export { exploreGet}