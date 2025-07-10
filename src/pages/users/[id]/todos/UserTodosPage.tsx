import React from "react";
import { useParams } from "react-router-dom";
import type { Todo } from "../../../../types/TodoType";
const UserTodosPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isNaN(userId) || userId <= 0) {
      setLoading(false);
      return;
    }

    const fetchTodos = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}/todos`
        );
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }

        const data: Todo[] = await response.json();
        setTodos(data);
      } catch (e) {
        throw new Error(`${e as Error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
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
