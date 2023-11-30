"use client";
import { useEffect, useState } from "react";
import LandingMain from "@/components/landingMain";
import UserSpace from "@/components/userSpace";

export default function Home() {
  const [validUser, setValidUser] = useState(true);

  return (

      <div className="relative h-screen w-screen">
         {validUser? <UserSpace />:<LandingMain/>}
      </div>
    )
  
}
