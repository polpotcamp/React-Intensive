import PostList from "../widgets/PostList/PostList";
import type { Post } from "../types/PostType";
import MainLayout from "../shared/layouts/MainLayout";
import React from "react";
import withLoading from "../shared/lib/hoc/HOC";
import PostLengthFilter from "../features/PostLengthFilter/ui/PostLengthFilter";
function App() {
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
    <MainLayout>
      <PostLengthFilter posts={posts} onFilter={setFilteredPosts} />
      <PostListWithLoading isLoading={loading} posts={filteredPosts} />
    </MainLayout>
  );
}

export default App;
