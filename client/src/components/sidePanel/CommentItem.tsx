// CommentItem.js
import React from "react";
import style from "./sidePanel.module.css";
import secrets from "@/config/secrets";

const CommentItem = ({ comment }) => {
    const { user, body, createdDate } = comment;

    const handleProfileLoad = (event: any) => {
        const profileId = event.target.id;
        window.location.href = `/userSpace/profile/${profileId}`;
    };

    return (
        <div className={style.commentItem}>
          <div className={style.commentDots}>&#8286;</div>
          <div className={style.commentAuthor} id ={user._id} onClick={handleProfileLoad}>

              <img id ={user._id}
                className={style.commentAuthorImg}
                src={user?.profilePicture
                    ? secrets.NEXT_PUBLIC_API_URL +
                      "/public/profilePictures/" +
                      user?.profilePicture
                    : secrets.ProfilePicture(user?.gender)}
                alt="Profile"
              />
            <p id ={user._id}>{user.username}</p>

            </div>
          <div className={style.commentBody}>{body}</div>
          <div className={style.commentDate}>{new Date(createdDate).toLocaleString()}</div>
        </div>

    );
};

export default CommentItem;
