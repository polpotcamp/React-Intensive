import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../../features/PostList/model/hooks/usePosts";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { posts, loading } = usePosts();
  const post = posts.find((p) => p.id === postId) ?? null;

  if (loading) return <p>Загрузка...</p>;
  if (!post) return <p>Пост не найден</p>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Автор: {post.userId}</p>
    </div>
  );
};

export default PostPage;
