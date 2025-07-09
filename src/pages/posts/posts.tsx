import React from "react";
import type{ Post } from "../../types/PostType";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import PostList from "../../widgets/PostList/PostList";
import withLoading from "../../shared/lib/hoc/HOC";
const PostsPage: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([]);
  React.useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Post[]) => {
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        throw new Error(`${err}`);
      });
  }, []);
  const PostListWithLoading = React.useMemo(() => withLoading(PostList), []);
  return (
    <>
      <PostLengthFilter posts={posts} onFilter={setFilteredPosts} />
      <PostListWithLoading isLoading={loading} posts={filteredPosts} />
    </>
  );
};

export default PostsPage;
