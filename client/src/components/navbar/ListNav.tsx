"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Logoutconfirm from "@/components/logout/LogoutConfirm";


const navigationItems = [
  { path: "/userSpace/profile", label: "Profile" },
  { path: "/userSpace/feed", label: "Feed" },
  { path: "/userSpace/post", label: "Post" },
  { path: "/userSpace/chats", label: "Chats" },
  { path:  "/userSpace/notification",label:"Alerts"},
  { path: "/userSpace/explore", label: "Explore" },
  { path: "/userSpace/setting", label: "Setting" },
];

const ListNav = () => {

  const router = useRouter();
  const pathname = usePathname();
  const [logoutConfirm, setLogoutConfirm] = useState(false)

  const handleLogout = () => {
   setLogoutConfirm(true)
   
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
            {item.label}
          </div>
        </li>
      ))}
      <li className={logoutConfirm ? `liNavLogoutSelected`:"liNav"}>
        <div
          className="tabHN"
          onClick={handleLogout}
        >
          LogOut
        </div>
      </li>
      {logoutConfirm &&<Logoutconfirm onClose={() => setLogoutConfirm(false)}/>}
    </ul>
  );
};

export default ListNav;
