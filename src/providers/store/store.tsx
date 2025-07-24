import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "../../entities/post/api/postsApi";
import { commentsApi } from "../../entities/comment/api/commentsApi";
import { albumsApi } from "../../entities/album/api/albumsApi";
import { todosApi } from "../../entities/todo/api/todosApi";
import { useSelector , useDispatch} from "react-redux";
import postReducer from '../../entities/post/model/slice/postSlice'
import userReducer from '../../entities/user/model/slice/UserSlice'
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [albumsApi.reducerPath]: albumsApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware)
      .concat(albumsApi.middleware)
      .concat(todosApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()