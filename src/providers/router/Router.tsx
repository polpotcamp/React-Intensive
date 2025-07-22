import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import PostsPage from "../../pages/posts/PostsPage";
import PostPage from "../../pages/posts/[id]/PostPage";
import UserAlbumsPage from "../../pages/users/[id]/albums/UserAlbumsPage";
import AlbumPhotosPage from "../../pages/albums/[id]/photos/AlbumPhotosPage";
import UserTodosPage from "../../pages/users/[id]/todos/UserTodosPage";
import UserPostsPage from "../../pages/users/[id]/posts/UserPostsPage";
import UserPage from "../../pages/users/[id]/UserPage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: "/posts/:id", element: <PostPage /> },
      { path: "/albums/:id/photos", element: <AlbumPhotosPage /> },
      { path: "/users/:id", element: <UserPage /> },
      { path: "/users/:id/albums", element: <UserAlbumsPage /> },
      { path: "/users/:id/todos", element: <UserTodosPage /> },
      { path: "/users/:id/posts", element: <UserPostsPage /> },
    ],
  },
]);
export default Router;
