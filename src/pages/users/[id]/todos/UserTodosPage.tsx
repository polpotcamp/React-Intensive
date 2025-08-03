import React from "react";
import { useParams } from "react-router-dom";
import { todosApi } from "../../../../entities/todo/api/todosApi";

const UserTodosPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    data: todos,
    isLoading,
    error,
  } = todosApi.useGetTodosByUserIdQuery(userId);

  if (isNaN(userId) || userId <= 0) {
    return <p>Неверный идентификатор пользователя</p>;
  }

  if (isLoading) {
    return <p>Загрузка задач...</p>;
  }
  if (error) {
    return <p>Ошибка загрузки альбомов</p>;
  }
  if (!todos || todos.length === 0) {
    return <p>альбомы не найдены</p>;
  }
  return (
    <div>
      <h1>Задачи пользователя {userId}</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodosPage;
