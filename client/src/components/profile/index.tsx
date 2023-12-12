// UserProfileCard.tsx
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileTabsCard from "./ProfileTabsCard";

const UserProfile = ({ user }: any) => {

  return (
    <div className="profileInfo max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
       <ProfileCard user={user} />
       <ProfileTabsCard user={user} />

    </div>
  );
};

export default UserProfile;
