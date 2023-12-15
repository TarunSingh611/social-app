import React from 'react'
import PostCard from './PostCard'
const UserPost = ({ user, posts }: any) => {


    return (posts && (
        posts.map((post: any) => (
            <PostCard key={post._id} post={post} />

        ))
    ) || (

            <div>
                No Posts
            </div>
        )

    )

}

export default UserPost