import React from "react";
import styles from './AlbumList.module.css'
import type { Album } from "../../types/AlbumType";
import AlbumWithPhotos from "../../entities/album/ui/AlbumsWithPhoto";
import ItemList from "../../shared/ui/ItemList/ItemList";
interface AlbumListProps {
  albums: Album[];
}

const AlbumList: React.FC<AlbumListProps> = ({ albums }) => {
  if (!albums || albums.length === 0) {
    return null;
  }

  return (
    <div className={styles.albums}>
      <ItemList
        items={albums}
        renderItem={(album) => <AlbumWithPhotos key={album.id} album={album} />}
      />
    </div>
  );
};

export default AlbumList;