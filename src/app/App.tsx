import PostList from "../widgets/PostList/PostList";
import posts from "../Posts.json";
import MainLayout from "../shared/layouts/MainLayout";
function App() {
  return (
    <MainLayout>
      <PostList posts={posts} />
    </MainLayout>
  );
}

export default App;
