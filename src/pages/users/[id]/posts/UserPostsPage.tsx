import React from "react";
import PostCard from "../../../../entities/post/ui/PostCard";
import { useParams } from "react-router-dom";
import type { Post } from "../../../../types/PostType";
import Posts from "../../../../Posts.json";

const UserPostsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isNaN(userId) || userId <= 0) {
      setPosts([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const userPosts = Posts.filter((post) => post.userId === userId);

    setPosts(userPosts);
    setLoading(false);
  }, [userId]);

  if (loading) return <p>Загрузка постов...</p>;
  if (posts.length === 0) return <p>Посты не найдены</p>;

  return (
    <div>
      <h1>Посты пользователя {userId}</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default UserPostsPage;
