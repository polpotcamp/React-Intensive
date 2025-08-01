import React from "react";
import styles from "./UserPage.module.css";
import { useParams } from "react-router-dom";
/*
import PostCard from "../../../entities/post/ui/PostCard";
import { todosApi } from "../../../entities/todo/api/todosApi";
import { albumsApi } from "../../../entities/album/api/albumsApi";
import { postsApi } from "../../../entities/post/api/postsApi";
import AlbumList from "../../../widgets/AlbumsList/AlbumList"; */
import { Outlet, NavLink } from "react-router-dom";
const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
/*
  const {
    data: albums = [],
    isLoading: isAlbumsLoading,
    isError: isAlbumsError,
  } = albumsApi.useGetAlbumsByUserIdQuery(userId);

  const {
    data: todos = [],
    isLoading: isTodosLoading,
    isError: isTodosError,
  } = todosApi.useGetTodosByUserIdQuery(userId);

  const {
    data: posts = [],
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = postsApi.useGetPostsByUserIdQuery(userId);

  const loading =
    isNaN(userId) ||
    userId <= 0 ||
    isAlbumsLoading ||
    isTodosLoading ||
    isPostsLoading;

  const error = isAlbumsError || isTodosError || isPostsError;

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка загрузки данных пользователя</p>;
  }
*/
  return (
    <div className={styles.container}>
      <h1>Пользователь {userId}</h1>
      <div className={styles.nav}>
        <NavLink
          to={`/users/${userId}/albums`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Альбомы пользователя
        </NavLink>
        <NavLink
          to={`/users/${userId}/todos`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Задачи пользователя
        </NavLink>
        <NavLink
          to={`/users/${userId}/posts`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Посты пользователя
        </NavLink>
      </div>
      <Outlet />
      {/* 
      <section className={styles.section}>
        <h2>Todos</h2>
        {todos.length === 0 && <p>Todos не найдены.</p>}
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.todoItem}>
              {todo.title}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Посты</h2>
        {posts.length === 0 && <p>Посты не найдены.</p>}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <section className={styles.section}>
        <h2>Альбомы и фото</h2>
        {albums.length === 0 && <p>Альбомы не найдены.</p>}
        <AlbumList albums={albums} />
      </section>
      */}
    </div>
  );
};

export default UserPage;
