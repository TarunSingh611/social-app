// UserProfileCard.tsx
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileTabsCard from "./ProfileTabsCard";

const UserProfile = ({ user }: any) => {

  return (
    <div className="profileInfo bg-white shadow-md rounded-md max-w-xxl  mx-auto p-6">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
       <ProfileCard user={user} />
       <ProfileTabsCard user={user} />

    </div>
  );
};

export default UserProfile;
