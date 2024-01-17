import Like from "../../models/likeModels.mjs";
import Post from "../../models/postModel.mjs";
import Comment from "../../models/commentModel.mjs";

const likeService = {
    like: async (contentType, contentId, userId) => {
        const like = await Like.findOne({ contentId, userId });
        let flag = 0;

        if (like) {
            await Like.deleteOne({ contentType, contentId, userId });
            flag = -1;
        } else {
            const newLike = new Like({
                contentType: contentType,
                contentId: contentId,
                userId: userId,
            });
            await newLike.save();
            flag = 1;
        }

        if (contentType === "post") {
            if (flag === 1) {
                await Post.findByIdAndUpdate(contentId, {
                    $inc: { likeCount: flag },
                });
            } else if (flag == -1) {
                await Post.findByIdAndUpdate(contentId, {
                    $inc: { likeCount: flag },
                });
            }
        } else if (contentType === "comment") {
            await Comment.findByIdAndUpdate(contentId, {
                $inc: { likeCount: flag },
            });
        }
        const post = await Post.findOne({ _id: contentId })

        return ({statusCode: 200, likeCount: post.likeCount ,flag });
       
    },
};

export default likeService;
