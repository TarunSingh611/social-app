"use client";
import LandingMain from "@/components/landingMain";
import LoadingRing from "@/components/misc/loadingRing";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const validUser = useSelector((state: any) => state.auth.user);

  useEffect(() => {

   if (validUser) {
      window.location.replace("/userSpace/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validUser])

  return (

    <div className="main">
      {validUser ? <LoadingRing/> : <LandingMain />} 
    </div>

  )

}




