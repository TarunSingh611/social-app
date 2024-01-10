"use client";
import UserLayout from "@/layouts/UserLayout";

import {  useSelector } from "react-redux";
import UserProfile from "@/components/profile";

const Profile = () => {
  const user:any = useSelector((state: any) => state.auth.user);

  return (
      user &&  <UserProfile user={user} />
  )
};
Profile.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Profile;
