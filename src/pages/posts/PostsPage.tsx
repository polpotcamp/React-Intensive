import React from "react";
import type { Post } from "../../types/PostType";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import PostList from "../../widgets/PostList/PostList";
import withLoading from "../../shared/lib/hoc/HOC";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
const PostsPage: React.FC = () => {
  const { posts, loading, error } = usePosts();
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([]);
  React.useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);
  const PostListWithLoading = React.useMemo(() => withLoading(PostList), []);
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  return (
    <>
      <PostLengthFilter posts={posts} onFilter={setFilteredPosts} />
      <PostListWithLoading isLoading={loading} posts={filteredPosts} />
    </>
  );
};

export default PostsPage;
