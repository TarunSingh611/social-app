"use client";
import UserLayout from "@/layouts/UserLayout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiGetNotifications from "@/api/notification/apiGetNotifications";
import FollowRequest from "@/components/notification/FollowRequest.tsx";
import Alerts from "@/components/notification/Alert.tsx";
import LoadingDots from "@/components/misc/loadingDots";

const Notifications = () => {
  const user: any = useSelector((state: any) => state.auth.user);
  const [notifications, setNotifications] = useState({} as any);

  useEffect(() => {
    if (user) {
      apiGetNotifications(notifications.length || 0)
        .then((res: any) => {
          if (res.success) {
            setNotifications(res.data);
            console.log(res.data);
          }
        })
        .catch((err: any) => {
          toast.error(err.message);
        });
    }
  }, [user]);

  return (
    notifications ? (
      <>
        {notifications.followRequests && (
          <FollowRequest requests={notifications.followRequests} />
        )}
        {notifications.Notifications && (
          <Alerts alerts={notifications.Notifications} />
        )}
      </>
    ):
    <LoadingDots />
  );
};
Notifications.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Notifications;
