import React, { useState, useEffect } from 'react';
import style from './slotBox.module.css';
interface SlotMachineProps {
    stopLetter: string;
    time ?: number;
    moveDirection: number;
    iterate?: boolean;
    iterateTime?: number;
  }
const SlotMachine: React.FC<SlotMachineProps> = ({stopLetter,time=500, moveDirection=1}) => {

  const [n, setN] = useState(0);
  const text = ['-','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  useEffect(() => {
   setTimeout(() => {
      if (text[n]!==stopLetter) {
       
        if (n + moveDirection>26) {
          setN((n+moveDirection)%27);
        }
        else if (n+ moveDirection<0) {
          setN(27+(n+moveDirection));
        }
        else{
            setN(n+moveDirection);
        }
      }
    }, time);
  }, [n]);



  const isLastIteration = stopLetter === text[n] ;

  return (
    <div className={`${style.slotMachine} flex flex-col justify-center`}>
      <div className={style.slot} id="slot1">
        <div className={style.letterMain}
       style={window == undefined ? {} : {
        transform: `rotateX(${isLastIteration ? 0 : Math.random() * 360}deg)`,
      }}
      onClick={() => {
        setN((0));
      }}
          >{text[n]}</div>
      </div>
    </div>
  );
};

export default SlotMachine;