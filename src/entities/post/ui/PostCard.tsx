import React from "react";
import type { Post } from "../../../types/PostType";
import styles from "./PostCard.module.css";
import { Button } from "../../../shared/ui/Button/Button";
import CommentList from "../../../widgets/CommnetList/ui/CommentList";
import type { Comment } from "../../../types/CommnetType";
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const fetchComments = React.useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      setComments(data);
      return data;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }, [post.id]);
  return (
    <div className={styles.postContainer}>
      <p className={styles.postTitle}>{post.title}</p>
      <p className={styles.postText}>{post.body}</p>
      {comments.length > 0 ? (
        <Button onClick={() => setComments([])}>
          Закрыть коментарии к посту
        </Button>
      ) : (
        <Button onClick={fetchComments}>Открыть коментарии к посту</Button>
      )}
      <CommentList comments={comments} />
    </div>
  );
};

export default PostCard;
