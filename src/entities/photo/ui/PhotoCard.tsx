import React from "react";
import type { Photo } from "../model/types";
import styles from "./AlbumsWithPhoto.module.css";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const photoUrl = photo.url.replace(
    /(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^/]+))/,
    "https://placehold.co\$2/FFF"
  );

  return (
    <div className={styles.photoItem}>
      <img
        src={photoUrl}
        alt={photo.title}
        className={styles.photoThumbnail}
      />
      <p className={styles.photoTitle}>{photo.title}</p>
    </div>
  );
};

export default PhotoCard;