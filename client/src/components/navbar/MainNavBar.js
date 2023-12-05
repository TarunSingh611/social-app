"use client";
import React, { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurtainRaised } from "../../redux/ReduxSlicer";
import { removeToken } from "@/services/auth";

const NavBar = () => {
  const dispatch = useDispatch();
  const validUser = useSelector((state) => state.auth.validUser);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [translateY, setTranslateY] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);


  useEffect(() => {
    console.log("validUser",validUser)
 
  }, [validUser])
  
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

  const handleLogout = () => {
    localStorage.clear();
    dispatch(validUser(false));
    removeToken();
    dispatch(setCurtainRaised(false));
    window.location.reload();
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
          <p>Gupp</p>
          <p>Shup</p>
        </span>
        <div className="flex ml-auto buttons">
          {validUser && (
            <div
              className="button text-white m-8 bg-red-500 rounded p-2 hover:bg-red-600 cursor-pointer"
              onClick={handleLogout}
            >
              LogOut
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
