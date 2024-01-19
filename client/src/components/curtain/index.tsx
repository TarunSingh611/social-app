'use client';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlotMachine from "../slotMachine";
import { setCurtainRaised } from "../../redux/ReduxSlicer";
const curtain = () => {
    
    const dispatch = useDispatch();
    const curtainRaised = useSelector((state: any) => state.app.curtainRaised);
    const [isClient , setIsClient] = useState(false);

    const handleEnter = () => {
        dispatch(dispatch(setCurtainRaised(true)));
      };
    useEffect(() => {
        setIsClient(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (isClient &&
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
    );
}

export default curtain;