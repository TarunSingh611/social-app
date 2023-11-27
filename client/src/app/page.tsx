'use client';
import { useState } from 'react'
import SlotMachine from '@/components/slotMachine'
import { useDispatch, useSelector } from 'react-redux';
import { setCurtainRaised } from '@/redux/ReduxSlicer';

export default function Home() {
  const dispatch = useDispatch();
  const curtainRaised = useSelector((state: any) => state.chat.curtainRaised);

  const handleEnter = () => {
    dispatch(dispatch(setCurtainRaised(true)));
  };
  return (
     <div className={`curtain relative ${curtainRaised ? 'curtain-raised' : ''}`}>
      <div className="slotMachine absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SlotMachine />
        <div className='flex mx-auto mt-20  justify-center'>
         <div className="curtainButton" onClick={handleEnter}>Enter ...</div>
        </div>
      </div>
    </div>
  )
}
