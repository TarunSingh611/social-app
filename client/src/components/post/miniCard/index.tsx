// pages/MiniCard.tsx
import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./MiniCard.module.css";
import secrets from "@/config/secrets";
import PostCard from "../userPost/PostCard";

const MiniCard = ({ post, setFullCard }: { post: any, setFullCard: any }) => {
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

  return (

    <div
      className={styles.miniCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMiniCardClick}
    >
      <div className={styles.thumbnailContainer}>
        <Image
          src={`${secrets.NEXT_PUBLIC_IMAGE_URL}${post.image}`}
          alt={`Post: ${post.caption}`}
          className={styles.thumbnail}
          width={320}
          height={320}
        />
      </div>
      {isHovered && (
        <div className={styles.overlay}>
          <p>{post.likes.length} Likes</p>
          <p>{post.comments.length} Comments</p>
        </div>
      )}
    </div>

  );
};

MiniCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
  setFullCard: PropTypes.func.isRequired,
};

export default MiniCard;
