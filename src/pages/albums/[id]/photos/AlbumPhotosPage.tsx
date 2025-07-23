import React from "react";
import { useParams } from "react-router-dom";
import type { Photo } from "../../../../types/PhotoType";
import Albums from "../../../../Albums.json"
import Photos from "../../../../Photos.json"
const AlbumPhotosPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);

  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

 React.useEffect(() => {
    if (isNaN(albumId) || albumId <= 0) {
      setPhotos([]);
      setLoading(false);
      return;
    }

    const albumExists = Albums.some(album => album.id === albumId);
    if (!albumExists) {
      setPhotos([]);
      setLoading(false);
      return;
    }
    const filteredPhotos = Photos.filter(photo => photo.albumId === albumId);

    setPhotos(filteredPhotos);
    setLoading(false);
  }, [albumId])

  if (loading) return <p>Загрузка фотографий...</p>;
  if (photos.length === 0) return <p>Фотографии не найдены</p>;
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
