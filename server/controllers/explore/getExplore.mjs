import getExploreService from "../../services/exploreService/getExplore.mjs";

async function exploreGet(req,res) {
const self = req.session.user;
    if (!self) {
      throw new Error('User not found');
    }
    const result = await getExploreService(self);
    res.statusCode(result.statusCode).json(result);
}
export { exploreGet}