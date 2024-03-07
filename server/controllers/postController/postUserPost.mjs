import getUserPostsByUserId from "../../services/postService/getUserPostByUserId.mjs";

const userPost = async (req, res) => {
    const userId = req.query.userId;
    const pno = req.query.pno;
    const self = req.session.user;

    if (!self) {
        return res
            .statusCode(403)
            .json({ message: "Forbidden: Invalid username" });
    }

    if (req.method === "GET") {
        const result = await getUserPostsByUserId(userId, self.userId, pno);
        return res.statusCode(200).json(result);
    }
};

export { userPost };
