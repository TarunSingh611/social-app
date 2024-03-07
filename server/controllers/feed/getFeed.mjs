import getFeedService from "../../services/feedService/getFeed.mjs";

async function feedGet(req,res) {

    const self = req.session.user
    if (!self) {
      throw new Error('User not found');
    }
    const result = await getFeedService(self);
    res.statusCode(result.statusCode).json(result);
}
export { feedGet}