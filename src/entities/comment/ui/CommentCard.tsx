import React from "react";
import type { Comment } from "../../../types/CommnetType";
import styles from "./CommnetCard.module.css";
interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <p className={styles.name}>{comment.name}</p>
      <p className={styles.text}>{comment.body}</p>
    </div>
  );
};

export default CommentCard;
