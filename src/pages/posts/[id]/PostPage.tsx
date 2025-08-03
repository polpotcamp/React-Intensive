import React from "react";
import { useParams } from "react-router-dom";
import { postsApi } from "../../../entities/post/api/postsApi";
const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { data: post, isLoading } = postsApi.useGetPostByIdQuery(postId);

  if (isLoading) return <p>Загрузка...</p>;
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
