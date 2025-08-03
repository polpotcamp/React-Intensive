import React from "react";
import styles from "./UserPage.module.css";
import { useParams } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";
const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  return (
    <div className={styles.container}>
      <h1>Пользователь {userId}</h1>
      <div className={styles.nav}>
        <NavLink
          to={`/users/${userId}/albums`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Альбомы пользователя
        </NavLink>
        <NavLink
          to={`/users/${userId}/todos`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Задачи пользователя
        </NavLink>
        <NavLink
          to={`/users/${userId}/posts`}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Посты пользователя
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default UserPage;
