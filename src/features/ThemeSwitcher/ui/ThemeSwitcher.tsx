import type { FC } from "react";
import { useTheme } from "../../../shared/lib/theme/useTheme";
const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      поменять тему на {theme === "light" ? "dark" : "light"} 
    </button>
  );
};

export default ThemeSwitcher;
