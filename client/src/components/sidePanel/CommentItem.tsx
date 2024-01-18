// CommentItem.js
import React from 'react';
import style from "./sidePanel.module.css";
import secrets from '@/config/secrets';
const { NEXT_PUBLIC_PROFILE_IMAGE_URL } = secrets;
const CommentItem = ({ comment }) => {
  const { user, body, createdDate } = comment;

  const handleProfileLoad = (event:any) => {
    const profileId = event.target.id;
    window.location.href = `/userSpace/profile/${profileId}`
  }


  return (
    <div className={style.commentItem}>
      <div className={style.commentAuthor} id ={user._id} onClick={handleProfileLoad}>
       
          <img id ={user._id}
            className={style.commentAuthorImg}
            src={NEXT_PUBLIC_PROFILE_IMAGE_URL + `/`+user.profilePicture}
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
