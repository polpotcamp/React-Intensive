import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages";
import MainLayout from "../../shared/layouts/MainLayout";
import PostsPage from "../../pages/posts/posts";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Главный layout для всех страниц
    children: [
      { index: true, element: <HomePage /> }, // Главная страница
      { path: "posts", element: <PostsPage /> },
    ],
  },
]);
export default Router;
