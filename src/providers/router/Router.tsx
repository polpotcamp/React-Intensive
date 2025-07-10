import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MainLayout from "../../shared/layouts/MainLayout";
import PostsPage from "../../pages/posts/PostsPage";
import PostPage from "../../pages/posts/[id]/PostPage";
import UserAlbumsPage from "../../pages/users/[id]/albums/UserAlbumsPage";
import AlbumPhotosPage from "../../pages/albums/[id]/photos/AlbumPhotosPage";
import UserTodosPage from "../../pages/users/[id]/todos/UserTodosPage";
import UserPostsPage from "../../pages/users/[id]/posts/UserPostsPage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/posts", element: <PostsPage /> },
      { path: "/posts/:id", element: <PostPage /> },
      { path: "/users/:id/albums", element: <UserAlbumsPage /> },
      { path: "/albums/:id/photos", element: <AlbumPhotosPage /> },
      { path: "/users/:id/todos", element: <UserTodosPage /> },
      { path: "/users/:id/posts", element: <UserPostsPage /> },
    ],
  },
]);
export default Router;
