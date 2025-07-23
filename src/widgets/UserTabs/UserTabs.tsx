import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserTabs.module.css";

const UserTabs: React.FC = () => {
  return (
    <nav className={styles.userTabs}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Главная страница
      </NavLink>
      <NavLink
        to="/users/1"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Моя страница
      </NavLink>
      <NavLink
        to="/users/1/albums"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Мои альбомы
      </NavLink>
      <NavLink
        to="/users/1/todos"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Мои задачи
      </NavLink>
      <NavLink
        to="/users/1/posts"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Мои посты
      </NavLink>
    </nav>
  );
};

export default UserTabs;
