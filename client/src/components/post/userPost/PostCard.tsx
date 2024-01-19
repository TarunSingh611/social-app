// pages/PostCard.tsx
import React, { useState, useEffect, useRef } from "react";
import secrets from "@/config/secrets";
import Image from "next/image";
import UserCard from "@/components/user/UserCard";
import styles from "./PostCard.module.css";
import PropTypes from "prop-types";
import apiGetUserName from "@/api/user/apiGetUserName";
import apiLike from "@/api/Reaxtion/Like";
import { useDispatch, useSelector } from "react-redux";
import { setSidePaneOpen , setSidePaneHead , setSidePaneBody , setSidePaneFoot} from "@/redux/slicers/sidePaneSlice";
import { toast } from "react-toastify";

const likeIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "heart.png";
const likedIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "heartLike.png";
const commentIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "comments.png";
const shareIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "share.png";
const reportIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "menu.png";
const fullScreenIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "fullscreen.png";

const PostCard = ({ post ,setPost = ()=> {} }: any) => {
    const dispatch = useDispatch();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [user, setUser] = useState({} as any);
    const [LocalPost, setLocalPost] = useState(post);
    const postCardRef = useRef<HTMLDivElement | null>(null);

    const handleFullScreenToggle = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleLike = () => {
      apiLike("post", LocalPost._id)
        .then((res: any) => {
          if (res.statusCode === 200) {
            setLocalPost((prevPost: any) => ({
              ...prevPost,
              liked: res.flag===1 ? true : false,
              likeCount: res.likeCount,
            }));
            setPost({
                liked: res.flag===1 ? true : false,
                likeCount: res.likeCount})

          } else {
            toast.error(res.message);
          }
        });
    };
    

    const handleComment = (post:any) => {

        postCardRef.current && postCardRef.current.scrollIntoView({ behavior: "smooth" });
        dispatch(setSidePaneOpen(true));
        dispatch(setSidePaneHead("Comments"));
        dispatch(setSidePaneBody({ postId: post._id }));
        dispatch(setSidePaneFoot({ likeCount: post.likeCount || 0, commentCount: post.commentCount || 0 }));

    };

    const handleShare = () => {};

    const handleReport = () => {};

    useEffect(() => {
        const fetchUser = async () => {
          const res:any = await apiGetUserName(post?.user?._id)
          setUser(res.user)
        }
        fetchUser()
      },[post?.user?._id])

      useEffect(() => {

        const options = {
          root: null, 
          rootMargin: '0px',
          threshold: 0.5, 
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {

                dispatch(setSidePaneHead("Comments"));
                dispatch(setSidePaneBody({ postId: post._id }));
                dispatch(setSidePaneFoot({ likeCount: post.likeCount || 0, commentCount: post.commentCount || 0 }));


            } else {
                if(!postCardRef?.current?.id){

                    dispatch(setSidePaneOpen(false));
                    dispatch(setSidePaneHead(""));
                    dispatch(setSidePaneFoot({ }));

                }         
            }
          });
        }, options);
    
        // Observe the target element
        if (postCardRef.current) {
          observer.observe(postCardRef.current);
        }
    
        // Cleanup the observer when the component is unmounted
        return () => {
          if (postCardRef.current) {
            observer.unobserve(postCardRef.current);
          }
        };
    
    }, [postCardRef]);

    return (
        <>
            <div ref={postCardRef} className={styles.postCard} id={LocalPost._id}>
                <div className="w-full flex justify-between border-b border-gray-200">
                { user?._id && <UserCard user={user} setUser={setUser}/>}

                    <button
                        onClick={handleReport}
                        className={`${styles.iconButton} right-0 ml-auto`}
                    >
                        <Image
                            priority
                            src={reportIconUrl}
                            alt="Report"
                            className={`${styles.icon}  hover:bg-slate-50`}
                            width={48}
                            height={48}
                        />
                    </button>
                </div>
                <div className="relative">
                    <Image
                        src={`${secrets.NEXT_PUBLIC_IMAGE_URL}${LocalPost.image}`}
                        alt={`Post: ${LocalPost.caption}`}
                        className={styles.postImage}
                        width={1080}
                        height={1080}
                    />
                    <div
                        className={styles.fullScreenIcon}
                        onClick={handleFullScreenToggle}
                    >
                        <Image
                            src={fullScreenIconUrl}
                            alt="Full Screen"
                            className={styles.icon}
                            width={32}
                            height={32}
                        />
                    </div>
                </div>

                <div className={`${`styles.cardContent`}`}>
                    <p className="text-lg font-semibold border-y border-gray-200 px-4 py-2">
                        {LocalPost.caption}
                    </p>
                    <div
                        className={`${styles.cardHeader} flex justify-between`}
                    >
                        <div
                            className={`${styles.iconContainer} w-full flex justify-between`}
                        >
                            <div className="w-full flex justify-start">
                                <div className="flex flex-col justify-center">
                                    <button
                                        onClick={handleLike}
                                        className={styles.iconButton}
                                    >
                                        <Image
                                            src={
                                                LocalPost.liked
                                                    ? likedIconUrl
                                                    : likeIconUrl
                                            }
                                            alt="Like"
                                            className={styles.icon}
                                            width={36}
                                            height={36}
                                        />
                                    </button>
                                    <p className={styles.postStats}>
                                        {LocalPost?.likeCount || 0}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <button
                                        onClick={()=>handleComment(LocalPost)}
                                        className={styles.iconButton}
                                    >
                                        <Image
                                            src={commentIconUrl}
                                            alt="Comment"
                                            className={styles.icon}
                                            width={36}
                                            height={36}
                                        />
                                    </button>
                                    <p className={styles.postStats}>
                                        {LocalPost?.commentCount || 0}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleShare}
                                className={styles.iconButton}
                            >
                                <Image
                                    src={shareIconUrl}
                                    alt="Share"
                                    className={styles.icon}
                                    width={36}
                                    height={36}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isFullScreen && (
                <div
                    className={styles.fullScreenOverlay}
                    onClick={handleFullScreenToggle}
                >
                    <Image
                        src={`${secrets.NEXT_PUBLIC_IMAGE_URL}${LocalPost.image}`}
                        alt={`Post: ${LocalPost.caption}`}
                        className={styles.fullScreenImage}
                        layout="fill"
                    />
                </div>
            )}
        </>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
    }).isRequired,
    setPost : PropTypes.func 
};

export default PostCard;
