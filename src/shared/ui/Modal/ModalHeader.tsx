import React from "react";
import styles from "./Modal.module.css";
import { useTheme } from "../../lib/theme/useTheme";
import { ModalContext } from "./ModalContext";
interface CompoundComponentProps {
  children: React.ReactNode;
}

const ModalHeader: React.FC<CompoundComponentProps> = ({ children }) => {
  const { theme } = useTheme();
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("Header используется вне контекста Modal");
  }
  const { onClose } = context;

  return (
    <div className="modal-header">
      <button
        className={`${styles.closeBtn} ${styles[theme]}`}
        onClick={onClose}
        type="button"
      >
        закрыть
      </button>
      <h2>{children}</h2>
    </div>
  );
};

export default ModalHeader;
