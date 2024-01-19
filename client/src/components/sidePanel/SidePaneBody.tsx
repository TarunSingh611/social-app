"use client ";
import style from "./sidePanel.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingDots from "../misc/loadingDots";
import apiGetComments from "@/api/posts/apiGetComments";
import CommentsPane from "./CommentsPane.tsx";
import { setSidePaneHead } from "@/redux/slicers/sidePaneSlice.ts";

const SidePaneBody = () => {
    const dispatch = useDispatch();
    const type = useSelector((state: any) => state.sidePane.sidePaneHead);
    const bodyId = useSelector((state: any) => state.sidePane.sidePaneBody);
    const sidePaneOpen = useSelector(
        (state: any) => state.sidePane.sidePaneOpen
    );
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [order, setOrder] = useState(-1);
    const [cno, setCno] = useState(0);

    const fetchComments = () => {
        if (!sidePaneOpen) {
            dispatch(setSidePaneHead(""));
            return;
        }
        setLoading(true);
        apiGetComments(bodyId.postId, order, 0)
            .then((res: any) => {
                if (res.statusCode === 200) {
                    setComments(res.comments);
                    setLoading(false);
                }
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (comments) {
            setCno(comments.length);
        }
    }, [comments]);

    useEffect(() => {
        setCno(0);
        setComments([]);
        if (bodyId) {
            fetchComments();
        }
             //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order, bodyId]);

    return loading ? (
        <div className={style.sidePaneLoading}>
            <LoadingDots />
        </div>
    ) : type === "Comments" ? (
        <CommentsPane postId={bodyId.postId} comments={comments} />
    ) : null;
};

export default SidePaneBody;
