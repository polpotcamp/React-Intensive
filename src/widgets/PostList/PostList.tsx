import type { FC } from "react";
import type { Post } from "../../types/PostType";
import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
