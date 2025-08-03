import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  type PayloadAction,
  type EntityState,
} from "@reduxjs/toolkit";
import type { User } from "../../../../types/UserType";
const usersAdapter = createEntityAdapter<User>();

interface UsersState extends EntityState<User, number> {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = usersAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data: User[] = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        usersAdapter.setAll(state, action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors<{
  users: UsersState;
}>((state) => state.users);

export default userSlice.reducer;
