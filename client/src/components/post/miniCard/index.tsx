// pages/MiniCard.tsx
import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./MiniCard.module.css";
import secrets from "@/config/secrets";

const MiniCard = ({ post, setFullCard }: { post: any; setFullCard: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMiniCardClick = () => {
    setFullCard(post);
  };

  return (post &&
    <div
      className={styles.miniCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMiniCardClick}
    >
      <img
        src={`${secrets.NEXT_PUBLIC_IMAGE_URL}${post.image}`}
        alt={`Post: ${post.caption}`}
        className={styles.thumbnail}
      />
      {isHovered && (
        <div className={styles.overlay}>
          <p>{post.likeCount || 0} Likes</p>
          <p>{post.commentCount || 0} Comments</p>
        </div>
      )}
    </div>
  );
};

MiniCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
  }).isRequired,
  setFullCard: PropTypes.func.isRequired,
};

export default MiniCard;
