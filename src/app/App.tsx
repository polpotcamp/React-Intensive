import PostList from "../widgets/PostList/PostList";
import type { Post } from "../types/PostType";
import MainLayout from "../shared/layouts/MainLayout";
import React from "react";
import withLoading from "../shared/lib/hoc/HOC";
function App() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
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
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        throw new Error(`${err}`);
      });
  }, []);
  const PostListWithLoading = withLoading(PostList);
  return (
    <MainLayout>
      <PostListWithLoading isLoading={loading} posts={posts} />
    </MainLayout>
  );
}

export default App;
