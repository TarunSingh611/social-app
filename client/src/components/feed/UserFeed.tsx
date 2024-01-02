import PostCard from '@/components/post/userPost/PostCard'
const UserFeed = ({feed}:any) => {
    return (
        <div className="midInfo !pt-0">
            {feed.map((post:any) => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    )
}

export default UserFeed