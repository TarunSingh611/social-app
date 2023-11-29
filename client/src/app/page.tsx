"use client";
import SlotMachine from "@/components/slotMachine";
import { useDispatch, useSelector } from "react-redux";
import { setCurtainRaised } from "@/redux/ReduxSlicer";
import { useEffect, useState } from "react";
import LandingMain from "@/components/landingMain";

export default function Home() {
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const curtainRaised = useSelector((state: any) => state.chat.curtainRaised);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleEnter = () => {
    console.log("hello");
    dispatch(dispatch(setCurtainRaised(true)));
  };
  return (
    isClient && (
      <div className="relative h-screen w-screen">
        <div
          className={`curtain absolute ${
            curtainRaised ? "curtain-raised" : ""
          }`}
        >
          <div className="slotMachine absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SlotMachine />
            <div className="flex mx-auto mt-20  justify-center">
              <div className="curtainButton" onClick={handleEnter}>
                {" "}
                Enter{" "}
              </div>
            </div>
          </div>
        </div>
   
          <LandingMain />
   
      </div>
    )
  );
}
