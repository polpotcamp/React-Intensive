import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../providers/store/store";
import { selectAllUsers } from "../../entities/user/model/slice/UserSlice";
import { fetchUsers } from "../../entities/user/model/slice/UserSlice";
import type { RootState } from "../../providers/store/store";
const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => selectAllUsers(state));
  const status = useAppSelector((state: RootState) => state.users.status);
  const error = useAppSelector((state: RootState) => state.users.error);

  React.useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Загрузка...</div>;
  }

  if (status === "failed") {
    return <div>Ошибка: {error}</div>;
  }
  return (
    <div>
      <h1>Пользователи</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
