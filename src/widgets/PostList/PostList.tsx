import type { Post } from "../../types/PostType";
import PostCard from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import ItemList from "../../shared/ui/ItemList/ItemList";
interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className={styles.posts}>
      <ItemList
        items={posts}
        renderItem={(post) => <PostCard key={post.id} post={post} />}
      />
    </div>
  );
};

export default PostList;
