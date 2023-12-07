import { getUserByToken } from "../../utils/jwtUtils.mjs";


const userGetProfile = async (req, res) => {
    const token = req.header('jwttoken');
    const user = await getUserByToken(token)
    res.send({message: "User fetched successfully", user , statusCode: 200});

};

export  {userGetProfile}