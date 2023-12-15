// pages/PostCard.tsx
import React from "react";
import secrets from "@/config/secrets";
const likeIconUrl = secrets.NEXT_PUBLIC_ICON_URL+"heart.png";
const commentIconUrl = secrets.NEXT_PUBLIC_ICON_URL+"comments.png";
const shareIconUrl = secrets.NEXT_PUBLIC_ICON_URL+"share.png";
const reportIconUrl = secrets.NEXT_PUBLIC_ICON_URL+"menu.png";

import styles from "./PostCard.module.css";

import PropTypes from "prop-types";

const PostCard = ({ post }: any) => {
  const handleLike = () => {
   
  };

  const handleComment = () => {
   
  };

  const handleShare = () => {
  
  };

  const handleReport = () => {
 
  };

  return (
    <div className={styles.postCard}>
      <img
        src={`${secrets.NEXT_PUBLIC_IMAGE_URL}${post.image}`}
        alt={`Post: ${post.caption}`}
        className={styles.postImage}
      />

      <div className={styles.cardContent}>
          <h1 className="text-lg font-semibold">{post.caption}</h1>
        <div className={`${styles.cardHeader} flex justify-between`} >
          <div className={`${styles.iconContainer} w-full flex justify-between`}>
            <button onClick={handleLike} className={styles.iconButton}>
              <img src={likeIconUrl} alt="Like" className={styles.icon} />
            </button>
            <button onClick={handleComment} className={styles.iconButton}>
              <img src={commentIconUrl} alt="Comment" className={styles.icon} />
            </button>
            <button onClick={handleShare} className={styles.iconButton}>
              <img src={shareIconUrl} alt="Share" className={styles.icon} />
            </button>
            <button onClick={handleReport} className={`${styles.iconButton}`}>
              <img src={reportIconUrl} height={70} width={70} alt="Report" className={styles.icon} />
            </button>
          </div >
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  
  }).isRequired,
};

export default PostCard;
