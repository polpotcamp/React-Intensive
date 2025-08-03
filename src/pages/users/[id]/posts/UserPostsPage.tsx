import React from "react";
import PostCard from "../../../../entities/post/ui/PostCard";
import { useParams } from "react-router-dom";
import { postsApi } from "../../../../entities/post/api/postsApi";

const UserPostsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    data: posts,
    isLoading,
    error,
  } = postsApi.useGetPostsByUserIdQuery(userId);

  if (isLoading) return <p>Загрузка постов...</p>;

  if (error) {
    return <p>Ошибка загрузки альбомов</p>;
  }

  if (!posts || posts.length === 0) return <p>Посты не найдены</p>;

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
