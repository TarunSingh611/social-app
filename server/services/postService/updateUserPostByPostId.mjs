const updateUserPost = {
    getUserPostByPostId: async (postId, userId) => {
        const result = await PostModel.findById({ _id: postId, user: userId });
        return {
            statusCode: 200,
            post: result,
        };
    },
    updateUserPostByPostId: async (postId, userId, data) => {
        // if there is no data, do nothing
        if (!data) {
            return {
                statusCode: 400,
            };
        }
        // only update the hashtag and caption
        const result = await PostModel.updateOne(
            { _id: postId, user: userId },
            {
                $set: {
                    hashtag: data.hashtag,
                    caption: data.caption,
                },
            }
        );
        return {
            statusCode: 200,
            post: result,
        };
    },
    deleteUserPostByPostId: async (postId, userId) => {
        const result = await PostModel.deleteOne({ _id: postId, user: userId });
        return {
            statusCode: 200,
            post: result,
        };
    },
};

export  default updateUserPost;