// CommentsPane.js

import React, { useState } from 'react';
import CommentItem from './CommentItem.tsx';
import style from "./sidePanel.module.css";
import apiPostComment from '@/api/posts/apiPostComments.ts';

const CommentsPane = ({ postId,comments }) => {
  const [newComment, setNewComment] = useState('');
  const [localComments, setLocalComments] = useState(comments);
  const handleAddComment = () => {
    console.log(postId)
    const text = newComment.trim();
    if(!text){
      return;
    }
   apiPostComment(postId,text)
      .then((res:any) => {
          if(res.statusCode === 200){
              setLocalComments([res.comment,...localComments]);
              setNewComment('');
          }
      })

  };

  return (
    <div className={style.commentsPane}>
      <div className={style.commentsList}>
        {localComments.map((comment: any) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </div>
      <div className={style.addComment}>
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Send</button>
      </div>
    </div>
  );
};

export default CommentsPane;
