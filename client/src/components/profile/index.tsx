// UserProfileCard.tsx
'use client';
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileTabsCard from "./ProfileTabsCard";
import { toast } from "react-toastify";
import apiGetUserPosts from "@/api/posts/apiGetUserPost";
import LoadingDots from "../misc/loadingDots";

const UserProfile = ({ user ,self ={} }: any) => {
  const [Posts, setPost] = useState([]);
  const [Private, setPrivate] = useState(false);
  const [localUser, setUser] = useState(user);
  const [Loading, setLoadingDots] = useState(true);

  useEffect(() => {
    if (localUser) {
      let pno = Posts ? Posts.length : 0;
      setPrivate(false);
      apiGetUserPosts(user?._id, pno)
        .then((res: any) => {
          if (res.statusCode === 200) {
            setPost(res.posts);
          } else if (res.statusCode === 201) {
            toast.error(res.message);
            setPrivate(true);
          } else {
            toast.error(res.message);
          }
        })
        .finally(() => setLoadingDots(false));
    }
  }, [localUser]);

  return (
    <div className="midInfo">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      <ProfileCard user={localUser} setUser={setUser} />
      {Loading ? (
        <div className="h-96 flex items-center justify-center">
          <div className="text-center">
            <LoadingDots />
          </div>
        </div>
      ) : Private ? (
        <div className="h-96 flex items-center justify-center">
          <div className="text-center">
            Private Account, you need to follow to see posts
          </div>
        </div>
      ) : (
        <ProfileTabsCard Posts={Posts} />
      )}
    </div>
  );
};

export default UserProfile;
