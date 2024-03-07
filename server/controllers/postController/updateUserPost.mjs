import updateUserPost from "../../services/postService/updateUserPostByPostId.mjs";

const updateUserPostController = async (req, res) => {
    const self = req.session.user;
    const method = req.method;

    if (!self) {
        return res.status(403).json({ message: "Forbidden: Invalid username" });
    } else if (method == "GET") {
        const postId = req.body.postId;
        const result = await updateUserPost.getUserPostByPostId(
            postId,
            tokenData.userId
        );
        return res.statusCode(200).json(result);
    } else if (method === "PUT") {
        const data = req.body.data;
        const postId = req.body.postId;
        const result = await updateUserPost.updateUserPostByPostId(
            postId,
            tokenData.userId,
            data
        );
        return res.statusCode(200).json(result);
    } else if (method === "DELETE") {
        const postId = req.body.postId;
        const result = await updateUserPost.deleteUserPostByPostId(
            postId,
            tokenData.userId
        );
        return res.statusCode(200).json(result);
    }
};

export { updateUserPostController };
