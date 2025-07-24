import React from "react";
import type { Post } from "../../../../types/PostType";
import Posts from "../../../../Posts.json";
interface UsePostsParams {
  userId?: number;
}

export function usePosts({ userId }: UsePostsParams = {}) {
 const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);

    const filteredPosts = userId
      ? Posts.filter(post => post.userId === userId)
      : Posts;

    setPosts(filteredPosts);
    setLoading(false);
  }, [userId]);

  return { posts, loading };
}
