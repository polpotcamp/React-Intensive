import React from "react";
import type { Post } from "../../../types/PostType";
import { filterByLength } from "../lib/filterByLength";
interface PostLengthFilterProps {
  posts: Post[];
  onFilter: (filterByLength: Post[]) => void;
}

const PostLengthFilter: React.FC<PostLengthFilterProps> = ({
  posts,
  onFilter,
}) => {
  const [minLength, setMinLength] = React.useState<string>("0");
  const [maxLength, setMaxLength] = React.useState<string>("100000000");

  const handleFilter = React.useCallback(() => {
    const min = parseInt(minLength, 10);
    const max = parseInt(maxLength, 10);

    if (isNaN(min) || isNaN(max)) {
      alert("Пожалуйста, введите корректные числа");
      return;
    }
    if (min > max) {
      alert("Минимальное значение не может быть больше максимального");
      return;
    }
    const filtered = filterByLength(posts, "body", min, max);
    onFilter(filtered);
  }, [minLength, maxLength, posts, onFilter]);

  return (
    <div>
      <label>
        Мин. длина:
        <input
          type="number"
          value={minLength}
          onChange={(e) => setMinLength(e.target.value)}
          min={0}
        />
      </label>
      <br />
      <label>
        Макс. длина:
        <input
          type="number"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
          min={0}
        />
      </label>
      <br />
      <button onClick={handleFilter}>Фильтровать</button>
    </div>
  );
};

export default PostLengthFilter;
