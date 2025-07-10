import React from "react";
import { useParams } from "react-router-dom";
import type { Post } from "../../../types/PostType";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const [post, setPost] = React.useState<Post | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (!postId) {
      setLoading(false);
      return;
    }
    const fetchPost = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        const data: Post = await response.json();
        setPost(data);
      } catch (e) {
        throw new Error(`${e as Error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);
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
