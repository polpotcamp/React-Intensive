import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { albumsApi } from "../../../../entities/album/api/albumsApi";

const UserAlbumsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    data: albums,
    isLoading,
    error,
  } = albumsApi.useGetAlbumsByUserIdQuery(userId);

  if (isLoading) {
    return <p>Загрузка альбомов...</p>;
  }

  if (error) {
    return <p>Ошибка загрузки альбомов</p>;
  }
  if (!albums || albums.length === 0) {
    return <p>альбомы не найдены</p>;
  }
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
