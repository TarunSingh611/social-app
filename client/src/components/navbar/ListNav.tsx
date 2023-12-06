'use client';
import React, { useEffect, useState } from "react";
import {useRouter} from 'next/navigation';

const ListNav = ({selected}: {selected: number}) => {
  const router = useRouter();
  // const [selectedTab, setSelectedTab] = useState(0);


  return (
    <ul className="flex flex-col py-4 my-8">
      <li className={`liNav ${selected === 0 ? "selected" : ""} `}>
        <div className={`tabHN `} onClick={() => {router.push("/profile")}}>
          Profile
        </div>
      </li>
      <li className={`liNav ${selected === 1 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() =>{router.push("/")}}>
          Feed
        </div>
      </li>
      <li className={`liNav ${selected === 2 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() =>{router.push("/chats")}}>
          Chats
        </div>
      </li>
      <li className={`liNav ${selected === 3 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() =>{router.push("/explore")}}>
          Explore
        </div>
      </li>
      <li className={`liNav ${selected === 4 ? "selected" : ""}`}>
        <div className={`tabHN `} onClick={() =>{router.push("/setting")}}>
          Setting
        </div>
      </li>
    </ul>
  );
};

export default ListNav;
