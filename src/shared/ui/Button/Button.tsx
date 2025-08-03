import styles from "./Button.module.css";
import type { PropsWithChildren } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
};
