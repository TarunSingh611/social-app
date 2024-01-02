import  findUserNameById from "../../services/userService/userGetUsername.mjs";
import  getUserByToken  from "../../services/userService/userLogin.mjs";

async function userGetUserName(req, res) {
    const token = req.header("jwttoken");
    const tokenData = await getUserByToken(token);
    const userId=req.query.userId
    if (!tokenData) {
        return res.status(403).json({ message: "Forbidden: Invalid username" });
    }
    
    const result = await findUserNameById(userId);
    res.json(result);
}

export { userGetUserName }