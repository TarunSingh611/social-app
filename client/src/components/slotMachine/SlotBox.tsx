import React, { useState, useEffect } from "react";
import style from "./slotBox.module.css";

interface SlotMachineProps {
  stopLetter: string;
  time?: number;
  moveDirection: number;
  iterate?: boolean;
  iterateTime?: number;
}

const SlotMachine: React.FC<SlotMachineProps> = ({
  stopLetter,
  time = 500,
  moveDirection = 1,
  iterate = false,
  iterateTime = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const letters = Array.from({ length: 62 }, (_, i) => {
    if (i < 10) return i.toString();
    if (i < 36) return String.fromCharCode(i + 55);
    return String.fromCharCode(i + 61);
  });

  useEffect(() => {
    setIsClient(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isClient && letters[index] !== stopLetter) {
      const timeoutId = setTimeout(() => {
        const newIndex =
          (index + moveDirection + letters.length) % letters.length;
        setIndex(newIndex);
      }, time);

      return () => clearTimeout(timeoutId);
    }
  }, [index, stopLetter, moveDirection, time, isClient, letters.length]);

  useEffect(() => {
    if (isClient && iterate) {
      const timeoutId = setTimeout(() => {
        setIndex(0);
      }, iterateTime);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResetClick = () => {
    setIndex(0);
  };

  const rotateStyle = {
    
    transform: `rotateX(${
      letters[index] === stopLetter ? 0 : Math.random() * 360
    }deg)`,
  };


  return (
    <div className={`${style.slotMachine} flex flex-col justify-center`}>
      <div className={style.slot} id="slot1">
        <div
          className={style.letterMain}
          style={isClient?rotateStyle:{}}
          onClick={handleResetClick}
        >
          {letters[index]}
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
