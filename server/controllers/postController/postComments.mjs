import {
    getPostComments,
    postPostComments,
    putPostComments,
    deletePostComments,
} from "../../services/postService/setPostComments.mjs";

async function postComments(req, res) {
    const self = req.session.user;
    if (!self) {
        return res.status(403).json({ message: "Forbidden: Invalid username" });
    }

    const postId = req.body.postId;
    const method = req.method;

    if (method === "GET") {
        const cno = req.query.cno;
        const order = req.query.order;
        const comments = await getPostComments(postId, order, cno);
        res.statusCode(comments.statusCode).json(comments);
    } else if (method === "POST") {
        const data = req.body.comment;
        if (!data) {
            return res
                .statusCode(400)
                .json({ statusCode: 400, message: "Invalid data" });
        }
        const result = await postPostComments(postId, self.userId, data);
        res.statusCode(result.statusCode).json(result);
    } else if (method === "PUT") {
        const data = req.body.comment;
        const result = putPostComments(self.userId, data._id, data.body);
        res.statusCode(result.statusCode).json(result);
    } else if (method === "DELETE") {
        const data = req.body.comment;
        const result = deletePostComments(postId, self.userId, data._id);
        res.statusCode(result.statusCode).json(result);
    }
}

export { postComments };
