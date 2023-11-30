'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurtainRaised } from "../../redux/ReduxSlicer";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [translateY, setTranslateY] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);

  const handleMouseDown = (e) => {
    console.log("down");
    setIsDragging(true);
    setOffset({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
        if (draggedDistance <15) {
         
        const deltaY = e.clientY - offset.y;

        setTranslateY((prevTranslateY) => prevTranslateY + deltaY);
        setDraggedDistance(
          (prevDraggedDistance) => prevDraggedDistance + deltaY
        );
        setOffset({
          x: e.clientX,
          y: e.clientY,
        });
        if (draggedDistance > 5) {
            console.log(draggedDistance);
            dispatch(setCurtainRaised(false));
          }
      }
    }
  };

  const handleMouseUp = () => {
    console.log("up");
    setIsDragging(false);
    setTranslateY(0); 
    setDraggedDistance(0);  
  };

  const handleBlur = () => {
    console.log("blur");
    setIsDragging(false);
    setTranslateY(0); 
    setDraggedDistance(0); 
  };

  return (
    <nav
      className="navbar"
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.1s ease-out",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onBlur={handleBlur}
      tabIndex="0"
    >
      <span className="logo flex">
    <p>Gupp</p>
    <p>Shup</p>
  </span>
    </nav>
  );
};

export default NavBar;
