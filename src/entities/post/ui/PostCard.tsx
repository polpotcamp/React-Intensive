import React from "react";
import type { Post } from "../../../types/PostType";
import styles from "./PostCard.module.css";
import { Button } from "../../../shared/ui/Button/Button";
import CommentList from "../../../widgets/CommnetList/ui/CommentList";
import type { Comment } from "../../../types/CommnetType";
import { Link } from "react-router-dom";
import Comments from "../../../Comments.json";
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [comments, setComments] = React.useState<Comment[]>([]);

  const fetchComments = React.useCallback(() => {
    const postComments = Comments.filter(
      (comment) => comment.postId === post.id
    );
    setComments(postComments);
    return postComments;
  }, [post.id]);

  const clearComments = () => {
    setComments([]);
  };

  const handleFetchComments = () => {
    fetchComments();
  };
  return (
    <div className={styles.postContainer}>
      <Link to={`/posts/${post.id}`} className={styles.postTitle}>
        {post.title}
      </Link>
      <p className={styles.postText}>{post.body}</p>
      {comments.length > 0 ? (
        <Button onClick={clearComments}>Закрыть комментарии к посту</Button>
      ) : (
        <Button onClick={handleFetchComments}>
          Открыть комментарии к посту
        </Button>
      )}
      <CommentList comments={comments} />
    </div>
  );
};

export default PostCard;
