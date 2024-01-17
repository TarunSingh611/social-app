"use client";
import { useEffect, useState } from "react";
import style from "./sidePanel.module.css";
import secrets from "@/config/secrets";
import { useDispatch, useSelector } from "react-redux";
import { setSidePaneOpen } from "@/redux/slicers/sidePaneSlice";
import SidePaneBody from "./SidePaneBody.tsx";
import React from "react";


const { NEXT_PUBLIC_ICON_URL } = secrets;
const iconDoubleLeft = NEXT_PUBLIC_ICON_URL + "/doubleLeft.gif";

const SidePanel = () => {
    const dispatch = useDispatch();
    const sidePaneOpen = useSelector(
        (state: any) => state.sidePane.sidePaneOpen
    );
    const sidePaneHead = useSelector(
        (state: any) => state.sidePane.sidePaneHead
    );
    const sidePaneFoot = useSelector(
        (state: any) => state.sidePane.sidePaneFoot
    );

    const handleToggle = () => {
        dispatch(setSidePaneOpen(!sidePaneOpen));
    };

    return (
        <div
            className={`${style.sidePanel} ${
                sidePaneOpen ? "" : `${style.hideSidePanel}`
            }`}
        >
            <div className={style.toggle} onClick={handleToggle}>
                <img src={iconDoubleLeft} />
            </div>
            <div className={style.panelContainer}>
                <div className={style.head}>{sidePaneHead}</div>
                <div className={style.body}>
                        <SidePaneBody/>
                </div>
                <div className={`${style.foot}`}>
                    {sidePaneFoot && Object?.entries(sidePaneFoot).map(([key, value]: any, index) => (
                        <span key={index}>
                            <p className={style.statKey}>{key}:{value}</p>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidePanel;