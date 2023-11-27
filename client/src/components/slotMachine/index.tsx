'use client';
import React, { useState, useEffect } from 'react';
import SlotBox from './SlotBox';
const SlotMachine = ({iterate=false,iterateTime=20000}:{iterate?:boolean,iterateTime?:number}) => {

  const config = [
    {
      stopLetter: 'W',
      time: 300,
      moveDirection: 2,
    },
    {
      stopLetter: 'E',
      time: 300,
      moveDirection: -1,
    },
    {
      stopLetter: 'L',
      time: 300,
      moveDirection: 5,
    },
    {
      stopLetter: 'C',
      time: 300,
      moveDirection: -1,
    },
    {
      stopLetter: 'O',
      time: 300,
      moveDirection: 2,
    },
    {
      stopLetter: 'M',
      time: 300,
      moveDirection: -8,
    },
    {
      stopLetter: 'E',
      time: 300,
      moveDirection: 7,
    }
  ]
 
  return (
    <div className="flex">
        {config.map((slot, index) => (
          <SlotBox
            key={index}
            stopLetter={slot.stopLetter}
            time={slot.time}
            moveDirection={slot.moveDirection}
            iterate={iterate}
            iterateTime={iterateTime}
          />
        ))}
      
    </div>
  );
};

export default SlotMachine;
