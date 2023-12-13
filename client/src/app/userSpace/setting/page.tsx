'use client';
import UserLayout from "@/layouts/UserLayout";
import SettingComponent from "@/components/settings";
import{useSelector} from "react-redux";
import ProfileCard from "@/components/profile/ProfileCard";
import { useEffect } from "react";
const Setting = () => {
  const user = useSelector((state: any) => state.auth.user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="settingContainer bg-white shadow-md rounded-md max-w-xxl mx-auto h-full lg:px-16 lg:py-4 md:px-8 px-4 py-2">
        <ProfileCard user={user} />
        <SettingComponent user={user}/>
   </div>
   )
};

Setting.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Setting;
