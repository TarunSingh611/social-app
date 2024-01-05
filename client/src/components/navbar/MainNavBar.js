"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurtainRaised } from "../../redux/ReduxSlicer";
import secrets from "../../config/secrets";

const { NEXT_PUBLIC_ICON_URL } = secrets;
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
      if (draggedDistance < 15) {
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
      <div className="flex justify-between">
        <span className="logo flex justify-between">
          <img src={`${NEXT_PUBLIC_ICON_URL}/logo.png`} className="logoImg" alt="logo" />
          <p>Social</p>
          <p>Sphere</p>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
