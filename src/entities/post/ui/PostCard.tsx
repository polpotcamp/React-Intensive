import React from "react";
import type { Post } from "../../../types/PostType";
import styles from "./PostCard.module.css";
import { Button } from "../../../shared/ui/Button/Button";
import CommentList from "../../../widgets/CommnetList/ui/CommentList";
import { Link } from "react-router-dom";
import { commentsApi } from "../../comment/api/commentsApi";
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [showComments, setShowComments] = React.useState(false);
  const {
    data: comments,
    isLoading,
    error,
  } = commentsApi.useGetCommentsByPostIdQuery(post.id, { skip: !showComments });

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };
  return (
    <div className={styles.postContainer}>
      <Link to={`/posts/${post.id}`} className={styles.postTitle}>
        {post.title}
      </Link>
      <p className={styles.postText}>{post.body}</p>
      <Button onClick={toggleComments}>
        {showComments
          ? "Закрыть комментарии к посту"
          : "Открыть комментарии к посту"}
      </Button>
      {showComments && (
        <>
          {isLoading && <p>Загрузка комментариев...</p>}

          {error && (
            <p>
              Ошибка загрузки комментариев:{" "}
              {"status" in error
                ? `Ошибка ${error.status ?? "неизвестна"}`
                : "message" in error
                ? error.message
                : "Неизвестная ошибка"}
            </p>
          )}

          {!isLoading && !error && <CommentList comments={comments ?? []} />}
        </>
      )}
    </div>
  );
};

export default PostCard;
