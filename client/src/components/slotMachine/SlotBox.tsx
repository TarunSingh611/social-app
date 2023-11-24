import React, { useState, useEffect } from 'react';
import style from './slotBox.module.css';
interface SlotMachineProps {
    stopLetter: string;
    time ?: number;
    moveDirection: number;
    iterate?: boolean;
    iterateTime?: number;
  }
const SlotMachine: React.FC<SlotMachineProps> = ({stopLetter,time=500, moveDirection=1,iterate=false,iterateTime=120000}) => {

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

  useEffect(() => {
        if(iterate){
        const interval = setInterval(() => {
            setN(0);
        },iterateTime);
    }
  },[])

  return (
    <div className={style.slotMachine}>
      <div className={style.slot} id="slot1">
        <div className={style.letter}>{text[(n - 1 + 27) % 27]}</div>
        <div className={style.letterMain}>{text[n]}</div>
        <div className={style.letter}>{text[(n + 1) % 27]}</div>
      </div>
    </div>
  );
};

export default SlotMachine;