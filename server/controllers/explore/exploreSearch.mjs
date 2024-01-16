import { getUserByToken } from "../../utils/jwtUtils.mjs";
import getExploreSearch from "../../services/exploreService/exploreSearch.mjs";
import User from "../../models/userModel.mjs";

async function exploreSearch(req,res) {

    const token = req.header("jwttoken");
    const tokenData = await getUserByToken(token);
    if (! tokenData) {
        return res.status(403).json({ message: 'Forbidden: Invalid username' });
    }
    const user = await User.findById(tokenData.userId);
    if (!user) {
      throw new Error('User not found');
    }
    const type = req.query.t;
    const data = req.query.q;
    const result = await getExploreSearch(data,type,tokenData.userId);
    res.json(result);
}
export { exploreSearch}