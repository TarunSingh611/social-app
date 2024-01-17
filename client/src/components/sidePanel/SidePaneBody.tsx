"use client ";

import style from "./sidePanel.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingDots from "../misc/loadingDots";

const SidePaneBody = () => {
    const type = useSelector((state: any) => state.sidePane.sidePaneHead);
    const bodyId = useSelector((state: any) => state.sidePane.sidePaneBody);
    const [loading, setLoading] = useState(true);

    return loading ? (
        <div className={style.sidePaneLoading}>
    
            <LoadingDots />

    </div>
    ) : type === "Comments" ? (
        <div id={bodyId} className={style.body}></div>
    ) : null;
};

export default SidePaneBody;
