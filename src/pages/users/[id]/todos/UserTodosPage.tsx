import React from "react";
import { useParams } from "react-router-dom";
import type { Todo } from "../../../../types/TodoType";
import Todos from "../../../../Todos.json";
const UserTodosPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isNaN(userId) || userId <= 0) {
      setTodos([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const userTodos = Todos.filter((todo) => todo.userId === userId);

    setTodos(userTodos);
    setLoading(false);
  }, [userId]);

  if (loading) return <p>Загрузка задач...</p>;
  if (todos.length === 0) return <p>Задачи не найдены</p>;

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
