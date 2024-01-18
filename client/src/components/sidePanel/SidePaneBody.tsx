"use client ";
import style from "./sidePanel.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingDots from "../misc/loadingDots";
import apiGetComments from "@/api/posts/apiGetComments";
import CommentsPane from "./CommentsPane.tsx";

const SidePaneBody = () => {
    const type = useSelector((state: any) => state.sidePane.sidePaneHead);
    const bodyId = useSelector((state: any) => state.sidePane.sidePaneBody);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [order, setOrder] = useState(-1);
    const [cno, setCno] = useState(0);


    const fetchComments = () => {
        setLoading(true);
        apiGetComments(bodyId.postId, order, 0)
            .then((res: any) => {
                if(res.statusCode === 200){
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
        setCno(0)
        setComments([]);
        if (bodyId) {
            fetchComments();
        }
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
