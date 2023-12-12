"use client";
import UserLayout from "@/layouts/UserLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "@/components/profile";
const Profile = () => {
  const user = useSelector((state: any) => state.auth.user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
        <UserProfile user={user} />
  )
};
Profile.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Profile;
