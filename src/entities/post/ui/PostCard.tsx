import type { FC } from "react";
import type { Post } from "../../../types/PostType";
import styles from "./PostCard.module.css";
interface PostCardProps {
  post: Post;
}
 
const PostCard: FC<PostCardProps> = ({post}) => {
    return (
        <div className={styles.postContainer}>
            <p  className={styles.postTitle}>{post.title}</p>
            <p  className={styles.postText}>{post.text}</p>
        </div>
      );
}
 
export default PostCard;
