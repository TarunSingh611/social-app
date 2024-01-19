"use client";
import dotenv from "dotenv";
dotenv.config();
import secrets from "@/config/secrets";
const { NEXT_PUBLIC_API_URL } = secrets;
import LandingMain from "@/components/landingMain";
import { setValidUser } from "@/redux/slicers/authSlice";
import { getToken } from "@/services/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const validUser = useSelector((state: any) => state.auth.validUser);

  console.log(NEXT_PUBLIC_API_URL, process.env.NEXT_PUBLIC_API_URL)

  useEffect(() => {

    if (validUser == null) {
      dispatch(setValidUser(getToken() ? true : false));
    }
    else if (validUser == true) {
      window.location.replace("/userSpace/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validUser])

  return (

    <div className="relative h-screen w-screen">
      {validUser === false ? <LandingMain /> : <>Loading..</>}
    </div>

  )

}




