import { useState } from "react";
import { useSelector } from "react-redux";

export default function FollowButton({ user }: any) {
    const self = useSelector((state: any) => state.auth.user);
    const [text , setText] = useState(
        self.following.includes(user._id) ? "Following" : "Follow"
    )
    
    const handleFollow = () => {
        ""
    }

    return (
        <div className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
           {text}
        </div>
    )
}