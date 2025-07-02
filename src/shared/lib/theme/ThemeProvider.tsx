import React, { useState, type ReactNode } from "react";

import type { TTheme } from "../../../types/ThemeType";

import { ThemeContext } from "./useTheme";

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
