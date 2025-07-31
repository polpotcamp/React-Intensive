import React from "react";
import type { Post } from "../../types/PostType";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import PostList from "../../widgets/PostList/PostList";
import withLoading from "../../shared/lib/hoc/HOC";
import { postsApi } from "../../entities/post/api/postsApi";

const PostsPage: React.FC = () => {
  const { data: posts, isLoading, error } = postsApi.useGetPostsQuery();
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    if (posts) setFilteredPosts(posts);
  }, [posts]);

  const PostListWithLoading = React.useMemo(() => withLoading(PostList), []);

  if (error) {
    let errorMessage = "Произошла ошибка";
    if ("status" in error) {
      errorMessage = `Ошибка ${error.status}: ${JSON.stringify(error.data)}`;
    } else if ("message" in error) {
      errorMessage = error.message || "Неизвестная ошибка";
    }
    return <p>Ошибка: {errorMessage}</p>;
  }
  return (
    <>
      <PostLengthFilter posts={posts || []} onFilter={setFilteredPosts} />
      <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
    </>
  );
};

export default PostsPage;
