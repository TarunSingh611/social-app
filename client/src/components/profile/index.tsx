// UserProfileCard.tsx
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileTabsCard from "./ProfileTabsCard";
import { toast } from "react-toastify";
import  apiGetUserPosts  from "@/api/posts/apiGetUserPost";

const UserProfile = ({ user }: any) => {
      
  console.log(":: repeat ::")
  const [Posts,setPost] = useState([]);

  useEffect(() => {
    if(user){
    let pno = Posts? Posts.length : 0;
    apiGetUserPosts(user._id,pno)
    .then((res:any)=>{
      if(res.statusCode === 200){
        setPost(res.posts);
        console.log(res.posts);
      }
      else{
        toast.error(res.message);
      }
    })
  }
  console.log(Posts);
  },[user]);


  return (
    <div className="midInfo">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
       <ProfileCard user={user} />
       <ProfileTabsCard Posts={Posts} />
    </div>
  );
};

export default UserProfile;
