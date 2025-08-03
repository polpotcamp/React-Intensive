import React from "react";
import { useParams } from "react-router-dom";
import { albumsApi } from "../../../../entities/album/api/albumsApi";
const AlbumPhotosPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);

  const {
    data: photos,
    isLoading,
    error,
  } = albumsApi.useGetPhotosByAlbumIdQuery(albumId);

  if (isLoading) {
    return <p>Загрузка фотографий...</p>;
  }

  if (error) {
    return <p>Ошибка загрузки фотографий</p>;
  }

  if (!photos || photos.length === 0) {
    return <p>Фотографии не найдены</p>;
  }
  return (
    <div>
      <h1>Фотографии альбома {albumId}</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img
              src={photo.url.replace(
                /(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^/]+))/,
                "https://placehold.co$2/FFF"
              )}
              alt={photo.title}
            />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPhotosPage;
