// UserProfileCard.tsx
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileTabsCard from "./ProfileTabsCard";
import { toast } from "react-toastify";
import  apiGetUserPosts  from "@/api/posts/apiGetUserPost";

const UserProfile = ({ user }: any) => {
  const [Posts,setPost] = useState([]);

  useEffect(() => {
    if(user){
    let pno = Posts? Posts.length : 0;
    apiGetUserPosts(user._id,pno)
    .then((res:any)=>{
      console.log(res)
      if(res.statusCode === 200){
        setPost(res.posts);
      }
      else{
        toast.error(res.message);
      }
    })
  }
  },[user]);

  useEffect(() => {
    console.log(Posts);
  },[Posts])

  return (
    <div className="midInfo">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
       <ProfileCard user={user} />
       <ProfileTabsCard Posts={Posts} />
    </div>
  );
};

export default UserProfile;
