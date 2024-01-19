'use client';
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux"; 
import Logoutconfirm from "@/components/logout/LogoutConfirm";

const navigationItems = [
  { path: "/userSpace/profile", label: "Profile" },
  { path: "/userSpace/feed", label: "Feed" },
  { path: "/userSpace/post", label: "Post" },
  { path: "/userSpace/chats", label: "Chats" },
  { path: "/userSpace/notification", label: "Alerts" },
  { path: "/userSpace/explore", label: "Explore" },
  { path: "/userSpace/setting", label: "Setting" },
];

const ListNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  // Use useSelector to get the notifications state from Redux
  const notifications = useSelector((state:any) => state.notifications.notifications);
  const [ notificationCount , setNotificationCount] = useState(0);
  useEffect(() => {  
    setNotificationCount(notifications?.alerts?.length||0 + notifications?.followRequests?.length);
     console.log(notificationCount)
     //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications]);

  const handleLogout = () => {
    setLogoutConfirm(true);
  };

  return (
    <ul className="flex flex-col py-4 my-8">
      {navigationItems.map((item) => (
        <li
          key={item.path}
          className={`liNav ${pathname === item.path ? "selected" : ""}`}
        >
          <div
            className="tabHN"
            onClick={() => pathname !== item.path && router.push(item.path)}
          >
            {item.label === "Alerts" && notifications.alerts && notificationCount > 0 ? (
              <>
                Alerts
                <sup className="text-white bg-red-500 rounded-full px-1">{notificationCount}</sup>
              </>
            ) : (
              item.label
            )}
          </div>
        </li>
      ))}
      <li className={logoutConfirm ? `liNavLogoutSelected` : "liNav"}>
        <div
          className="tabHN"
          onClick={handleLogout}
        >
          LogOut
        </div>
      </li>
      {logoutConfirm && <Logoutconfirm onClose={() => setLogoutConfirm(false)} />}
    </ul>
  );
};

export default ListNav;
