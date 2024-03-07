import getExploreSearch from "../../services/exploreService/exploreSearch.mjs";


async function exploreSearch(req,res) {

    const self = req.session.user;
    if (!self) {
      throw new Error('User not found');
    }
    const type = req.query.t;
    const data = req.query.q;
    const result = await getExploreSearch(data,type,self.userId);
    res.statusCode(result.statusCode).json(result);
}
export { exploreSearch}