import React from "react";
import { useParams } from "react-router-dom";
import type { Album } from "../../../../types/AlbumType";
import { Link } from "react-router-dom";

const UserAlbumsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const [albums, setAlbums] = React.useState<Album[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isNaN(userId) || userId <= 0) {
      setLoading(false);
      return;
    }

    const fetchAlbums = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}/albums`
        );
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }

        const data: Album[] = await response.json();
        setAlbums(data);
      } catch (e) {
        throw new Error(`${e as Error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [userId]);

  if (loading) return <p>Загрузка альбомов...</p>;
  if (albums.length === 0) return <p>Альбомы не найдены</p>;

  return (
    <div>
      <h1>Альбомы пользователя {userId}</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbumsPage;
