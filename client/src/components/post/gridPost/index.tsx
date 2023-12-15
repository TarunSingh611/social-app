import MiniCard from "@/components/post/miniCard"
import { useState } from "react"
import PostCard from "../userPost/PostCard"
const GridPost = ({ user, posts }: { user: any, posts: any }) => {

  const [Card, setCard] = useState(null)

  const setFullCard = (post: any) => {
    setCard(post)
  }

  return (Card ? (<>
    <PostCard post={Card} />
    <button onClick={() => setCard(null)} className="bg-red-500 w-full text-white px-4 py-2 rounded">Close</button>
  </>
  ) : (<div className="grid grid-cols-1 sm:grid-cols-3 ">
    {
      posts && (
        posts.map((post: any) => (
          <MiniCard key={post._id} post={post} setFullCard={setFullCard} />

        ))
      ) || (

        <div>
          No Posts
        </div>
      )
    }</div>
  )
  )
}

export default GridPost