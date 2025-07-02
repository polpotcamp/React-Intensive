import PostList from "../widgets/PostList/PostList";
import posts from "../Posts.json";
import "./App.css";
import { useTheme } from "../shared/lib/theme/useTheme";
import Header from "../widgets/LayoutHeader/Header";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme}`}>
        <Header />
        <PostList posts={posts} />
      </div>
    </>
  );
}

export default App;
