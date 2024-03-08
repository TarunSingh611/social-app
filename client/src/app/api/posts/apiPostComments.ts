import makeApiRequest from "@/services/apiReq";

const getPostComments = async (postId: any, comment: any) => {
    const options = {
        method: "POST" as const,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
    };
    return await makeApiRequest(`/post/comments?postId=${postId}`, options);
};

export default getPostComments;
