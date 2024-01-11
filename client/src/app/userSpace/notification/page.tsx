"use client";
import UserLayout from "@/layouts/UserLayout";
import UserProfile from "@/components/profile";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiGetNotifications from "@/api/notification/apiGetNotifications";

const Notifications = () => {
    const user:any = useSelector((state: any) => state.auth.user);
    const [notifications, setNotifications] = useState([]);
    
    useEffect(() => {
        if (user) {
          apiGetNotifications( notifications.length|| 0)
            .then((res: any) => {
              if (res.statusCode === 200) {
                setNotifications(res.data);
                console.log(res.data)
              }
            })
            .catch((err: any) => {
              toast.error(err.message);
            });
        }
        
    },[user])

  return (
      <>Notification</>
  )
};
Notifications.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Notifications;
