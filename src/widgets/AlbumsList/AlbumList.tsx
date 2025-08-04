import React from "react";
import styles from './AlbumList.module.css'
import type { Album } from "../../types/AlbumType";
import AlbumWithPhotos from "../../entities/album/ui/AlbumsWithPhoto";
interface AlbumListProps {
    albums:Album[]
}
 
const AlbumList: React.FC<AlbumListProps> = ({albums}) => {
    return (
        <div className={styles.albums}>
      {albums.map((album) => (
        <AlbumWithPhotos key={album.id} album={album} />
      ))}
    </div>
      );
}
 
export default AlbumList;