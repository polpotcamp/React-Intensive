import React from "react";
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader";
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter";
import { useTheme } from "../lib/theme/useTheme";
import "./MainLayout.css";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <main className={theme}>
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </main>
  );
};

export default MainLayout;
