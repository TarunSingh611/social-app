"use client";
import LandingMain from "@/components/landingMain";
import UserSpace from "@/components/userSpace";
import { setValidUser } from "@/redux/slicers/authSlice";
import { getToken } from "@/services/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const validUser = useSelector((state: any) => state.auth.validUser);

  useEffect(() => {

    if(validUser == null){ 
      dispatch(setValidUser(getToken()? true : false));
    }
  },[validUser])

  return (

<div className="relative h-screen w-screen">
  {validUser === true ? <UserSpace /> : validUser === false ? <LandingMain /> : <>Loading..</>}
</div>

    )
  
}
