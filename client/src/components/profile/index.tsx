// UserProfileCard.tsx
'use client';
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileTabsCard from "./ProfileTabsCard";
import { toast } from "react-toastify";
import  apiGetUserPosts  from "@/api/posts/apiGetUserPost";

const UserProfile = ({ user }: any) => {
      
  const [Posts,setPost] = useState([]);
  const [Private,setPrivate] = useState(false);

  useEffect(() => {
    if(user){
    let pno = Posts? Posts.length : 0;
    setPrivate(false);
    apiGetUserPosts(user?._id,pno)
    .then((res:any)=>{
      if(res.statusCode === 200){
        setPost(res.posts);
        
      }
      else if(res.statusCode === 201){
        toast.error(res.message);
        setPrivate(true);
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
       {Private ?  <div className="w-full h-50 text-center p-40 border-b border-gray-200">Private Account, you need to follow to see posts</div> :<ProfileTabsCard Posts={Posts} />}
    </div>
  );
};

export default UserProfile;
