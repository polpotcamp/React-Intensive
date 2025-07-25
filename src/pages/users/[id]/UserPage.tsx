import React from "react";
import styles from "./UserPage.module.css";
import { useParams } from "react-router-dom";
import type { Album } from "../../../types/AlbumType";
import type { Photo } from "../../../types/PhotoType";
import type { Todo } from "../../../types/TodoType";
import type { Post } from "../../../types/PostType";
import PostCard from "../../../entities/post/ui/PostCard";
import Albums from "../../../Albums.json";
import Photos from "../../../Photos.json";
import Todos from "../../../Todos.json";
import Posts from "../../../Posts.json";
import { Outlet, NavLink } from "react-router-dom";

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const [albums, setAlbums] = React.useState<Album[]>([]);
  const [photos, setPhotos] = React.useState<Record<number, Photo[]>>({});
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    const userAlbums = Albums.filter((album) => album.userId === userId);
    const userTodos = Todos.filter((todo) => todo.userId === userId);
    const userPosts = Posts.filter((post) => post.userId === userId);

    const photosByAlbum: Record<number, Photo[]> = {};
    userAlbums.forEach((album) => {
      photosByAlbum[album.id] = Photos.filter(
        (photo) => photo.albumId === album.id
      );
    });

    setAlbums(userAlbums);
    setTodos(userTodos);
    setPosts(userPosts);
    setPhotos(photosByAlbum);

    setLoading(false);
  }, [userId]);

  if (loading) return <p>Загрузка...</p>;

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
        {albums.map((album) => (
          <div key={album.id} className={styles.album}>
            <h3 className={styles.albumTitle}>{album.title}</h3>
            <div className={styles.photosGrid}>
              {(photos[album.id] || []).map((photo) => (
                <div key={photo.id} className={styles.photoItem}>
                  <img
                    src={photo.url.replace(
                      /(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^/]+))/,
                      "https://placehold.co$2/FFF"
                    )}
                    alt={photo.title}
                    className={styles.photoThumbnail}
                  />
                  <p className={styles.photoTitle}>{photo.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      */}
    </div>
  );
};

export default UserPage;
