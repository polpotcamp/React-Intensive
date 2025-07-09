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
  const [maxLength, setMaxLength] = React.useState<string>("10000");

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
  const handleMinLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinLength(e.target.value);
  };

  const handleMaxLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxLength(e.target.value);
  };
  return (
    <div>
      <label>
        Мин. длина:
        <input
          type="number"
          value={minLength}
          onChange={handleMinLengthChange}
          min={0}
        />
      </label>
      <br />
      <label>
        Макс. длина:
        <input
          type="number"
          value={maxLength}
          onChange={handleMaxLengthChange}
          min={0}
        />
      </label>
      <br />
      <button onClick={handleFilter}>Фильтровать</button>
    </div>
  );
};

export default PostLengthFilter;
