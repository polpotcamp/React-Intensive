import type { Theme } from "../../../types/ThemeType";
import { useContext, createContext } from "react";

interface IThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<IThemeContextProps | null>(null);
export const useTheme = (): IThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('хук используеться вне контекста');
  }
  return context;
};