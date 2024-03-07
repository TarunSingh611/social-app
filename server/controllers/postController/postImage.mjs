import setImagePost from "../../services/postService/setImagePost.mjs";

const postImage = async (req, res) => {
    try {
        const self = req.session.user;

        if (!self) {
            return res
                .statusCode(403)
                .json({ message: "Forbidden: Invalid username" });
        }

        const file = req.file;
        const hashTags = req.body.hashtags;
        const caption = req.body.caption;

        if (!file) {
            return res
                .status(400)
                .json({ statusCode: 400, message: "File not found" });
        }

        const result = await setImagePost(self.userId, file, hashTags, caption);
        res.statusCode(200).json(result);
    } catch (error) {
        console.error("Error in postImage controller:", error);
        res.statusCode(500).json({
            statusCode: 500,
            message: "Internal Server Error",
        });
    }
};

export { postImage };
