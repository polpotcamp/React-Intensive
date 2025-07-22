import React from "react";
import type { Comment } from "../../../types/CommnetType";
import CommentCard from "../../../entities/comment/ui/CommentCard";
import styles from "./CommentList.module.css";
interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className={styles.comments}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
