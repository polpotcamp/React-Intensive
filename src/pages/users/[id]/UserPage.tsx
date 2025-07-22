import React from "react";
import styles from "./UserPage.module.css";
import { useParams } from "react-router-dom";
import type { Album } from "../../../types/AlbumType";
import type { Photo } from "../../../types/PhotoType";
import type { Todo } from "../../../types/TodoType";
import type { Post } from "../../../types/PostType";
import PostCard from "../../../entities/post/ui/PostCard";

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const [albums, setAlbums] = React.useState<Album[]>([]);
  const [photos, setPhotos] = React.useState<Record<number, Photo[]>>({});
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [albumsRes, todosRes, postsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        ]);

        if (!albumsRes.ok || !todosRes.ok || !postsRes.ok) {
          throw new Error("Ошибка при загрузке данных");
        }

        const albumsData: Album[] = await albumsRes.json();
        const todosData: Todo[] = await todosRes.json();
        const postsData: Post[] = await postsRes.json();

        setAlbums(albumsData);
        setTodos(todosData);
        setPosts(postsData);

        const photosPromises = albumsData.map((album) =>
          fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
          )
            .then((res) => {
              if (!res.ok) throw new Error("Ошибка при загрузке фото");
              return res.json();
            })
            .then((photos: Photo[]) => ({ albumId: album.id, photos }))
        );

        const photosResults = await Promise.all(photosPromises);

        const photosByAlbum: Record<number, Photo[]> = {};
        photosResults.forEach(({ albumId, photos }) => {
          photosByAlbum[albumId] = photos;
        });

        setPhotos(photosByAlbum);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className={styles.error}>Ошибка: {error}</p>;

  return (
    <div className={styles.container}>
      <h1>Пользователь {userId}</h1>

      <section className={styles.section}>
        <h2>Todos</h2>
        {todos.length === 0 && <p>Todos не найдены.</p>}
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} className={`${styles.todoItem} `}>
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
    </div>
  );
};

export default UserPage;
