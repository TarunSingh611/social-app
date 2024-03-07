import {
  getUserName,
  getPostsByHashtags,
  getFullName,
} from "../../Repositories/SearchRepo/SearchRepo.mjs";

async function exploreSearch(data, type ,tokenId) {
   
    if (!data) {
      return { statusCode: 400 };
    }
    let dataArray = data.split(" ").map(item => item.trim());

  if (type == "username") {
    const result = await getUserName(dataArray[0]);
    return { type, statusCode: 200, result };
  } else if (type == "hashtag") {
    const result = await getPostsByHashtags(dataArray,tokenId);
    return { type, statusCode: 200, result };
  } else if (type == "name") {
    const result = await getFullName(dataArray);
    return { type, statusCode: 200, result };
  } else {
    return { statusCode: 400 };
  }
}

export default exploreSearch;
