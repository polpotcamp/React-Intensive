import React from 'react';
import { Link } from 'react-router-dom';
import Users from "../../Users.json"
const UsersPage: React.FC = () => {
  return (
    <div>
      <h1>Пользователи</h1>
      <ul>
        {Users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;