import React from "react";
import { useParams } from "react-router-dom";
import type { Album } from "../../../../types/AlbumType";
import { Link } from "react-router-dom";
import Albums from "../../../../Albums.json";
const UserAlbumsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const [albums, setAlbums] = React.useState<Album[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isNaN(userId) || userId <= 0) {
      setAlbums([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const userAlbums = Albums.filter((album) => album.userId === userId);
    setAlbums(userAlbums);
    setLoading(false);
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
