import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useTheme } from "../../lib/theme/useTheme";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
interface ModalContextType {
  onClose: () => void;
}
interface CompoundComponentProps {
  children: React.ReactNode;
}
interface ModalCompoundComponents {
  Header: React.FC<CompoundComponentProps>;
  Body: React.FC<CompoundComponentProps>;
  Footer: React.FC<CompoundComponentProps>;
}
const ModalContext = React.createContext<ModalContextType | null>(null);
const modalRoot = document.getElementById("modal-root") as HTMLElement;

const Modal: React.FC<ModalProps> & ModalCompoundComponents = ({
  isOpen,
  onClose,
  children,
}) => {
  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", onEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={handleModalClick}>
        <ModalContext.Provider value={{ onClose }}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>,
    modalRoot
  );
};
const Header = ({ children }: CompoundComponentProps) => {
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

const Body = ({ children }: CompoundComponentProps) => {
  return <div className="modal-body">{children}</div>;
};

const Footer = ({ children }: CompoundComponentProps) => {
  return <div className="modal-footer">{children}</div>;
};
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
