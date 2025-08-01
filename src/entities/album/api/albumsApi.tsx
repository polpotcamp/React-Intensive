import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album } from "../../../types/AlbumType";
import type { Photo } from "../../../types/PhotoType";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Album", "Photo"],
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query<Photo[], number>({
      query: (albumId) => `photos?albumId=${albumId}`,
      providesTags: (result, _error, albumId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Photo" as const, id })),
              { type: "Album", id: `ALBUM_${albumId}` }, 
            ]
          : [{ type: "Album", id: `ALBUM_${albumId}` }],
    }),
    getAlbumsByUserId: builder.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Album" as const, id })),
              { type: "Album", id: `USER_${userId}` },
            ]
          : [{ type: "Album", id: `USER_${userId}` }],
    }),
  }),
});
