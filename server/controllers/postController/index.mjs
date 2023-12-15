export {postImage} from "./postImage.mjs";
export {userPost as postUserPost} from "./postUserPost.mjs";
const postCreate = async (req, res) => {
    res.send("postCreate");
  };
  
  const postPut = async (req, res) => {
    res.send("postPut");
  };
  
  const postGet = async (req, res) => {
    res.send("postGet");
  };
  
  const postDelete = async (req, res) => {
    res.send("postDelete");
  };
  
  const postFeed = async (req, res) => {
    res.send("postFeed");
  };
  
  const postReaction = async (req, res) => {
    res.send("postReaction");
  };
  
  export { postCreate, postPut, postGet, postDelete, postFeed, postReaction };
  


