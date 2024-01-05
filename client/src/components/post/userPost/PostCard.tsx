// pages/PostCard.tsx
import React, { useState } from "react";
import secrets from "@/config/secrets";
import Image from "next/image";
import UserCard from "@/components/user/UserCard";
import FollowButton from "@/components/misc/FollowButton";
import styles from "./PostCard.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const likeIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "heart.png";
const commentIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "comments.png";
const shareIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "share.png";
const reportIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "menu.png";
const fullScreenIconUrl = secrets.NEXT_PUBLIC_ICON_URL + "fullscreen.png";


const PostCard = ({ post }: any) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const self = useSelector((state: any) => state.auth.user);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleLike = () => {

  };

  const handleComment = () => {

  };

  const handleShare = () => {

  };

  const handleReport = () => {

  };

  return (<>
    <div className={styles.postCard}>
      <div className="w-full flex justify-between border-b border-gray-200">
       {post && <UserCard user={post?.userData}/>}
       <div className="ml-auto mr-2 my-auto">
        {post?.userData?._id && self._id !== post?.userData?._id && (
          <FollowButton user={post?.userData} />
        )}
      </div>
        <button onClick={handleReport} className={`${styles.iconButton} right-0 ml-auto`}>
          <Image priority src={reportIconUrl} alt="Report" className={`${styles.icon}  hover:bg-slate-50`} width={48} height={48} />
        </button>
      </div>
      <div className="relative">
        <Image
          src={`${secrets.NEXT_PUBLIC_IMAGE_URL}${post.image}`}
          alt={`Post: ${post.caption}`}
          className={styles.postImage}
          width={1080}
          height={1080}
        />
        <div className={styles.fullScreenIcon} onClick={handleFullScreenToggle}>
          <Image src={fullScreenIconUrl} alt="Full Screen" className={styles.icon} width={32} height={32} />
        </div>
      </div>

      <div className={`${`styles.cardContent`}`}>
        <p className="text-lg font-semibold border-y border-gray-200 px-4 py-2">{post.caption}</p>
        <div className={`${styles.cardHeader} flex justify-between`} >
          <div className={`${styles.iconContainer} w-full flex justify-between`}>
            <div className="w-full flex justify-start">
              <div className="flex flex-col justify-center">
                <button onClick={handleLike} className={styles.iconButton}>
                  <Image src={likeIconUrl} alt="Like" className={styles.icon} width={36} height={36} />
                </button>
                <p className={styles.postStats} >{post?.likes?.length || 0}</p>
              </div>
              <div className="flex flex-col justify-center">
                <button onClick={handleComment} className={styles.iconButton}>
                  <Image src={commentIconUrl} alt="Comment" className={styles.icon} width={36} height={36} />
                </button>
                <p className={styles.postStats}>{post?.comments?.length || 0}</p>
              </div>
            </div>
            <button onClick={handleShare} className={styles.iconButton}>
              <Image src={shareIconUrl} alt="Share" className={styles.icon} width={36} height={36} />
            </button>


          </div>
        </div>
      </div>
    </div>
    {isFullScreen && (
      <div className={styles.fullScreenOverlay} onClick={handleFullScreenToggle}>
        <Image
          src={`${secrets.NEXT_PUBLIC_IMAGE_URL}${post.image}`}
          alt={`Post: ${post.caption}`}
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
};

export default PostCard;
