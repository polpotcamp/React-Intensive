import React from "react";
import { albumsApi } from "../api/albumsApi";
import type { Album } from "../../../types/AlbumType";
import styles from "./AlbumsWithPhoto.module.css";
interface AlbumWithPhotosProps {
  album: Album;
}
const AlbumWithPhotos: React.FC<AlbumWithPhotosProps> = ({ album }) => {
  const {
    data: photos,
    isLoading,
    isError,
  } = albumsApi.useGetPhotosByAlbumIdQuery(album.id);

  if (isLoading) return <p>Загрузка фото...</p>;
  if (isError) return <p>Ошибка загрузки фото</p>;
  if (!photos) return <p>фото не найдены</p>;
  return (
    <div className={styles.album}>
      <h3 className={styles.albumTitle}>{album.title}</h3>
      <div className={styles.photosGrid}>
        {photos.map((photo) => (
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
  );
};
export default AlbumWithPhotos;
