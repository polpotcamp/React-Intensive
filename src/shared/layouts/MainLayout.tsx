import React from "react";
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader";
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter";
import { useTheme } from "../lib/theme/useTheme";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  const { theme } = useTheme();
  return (
    <main className={theme}>
      <LayoutHeader />
      <Outlet />
      <LayoutFooter />
    </main>
  );
};

export default MainLayout;
