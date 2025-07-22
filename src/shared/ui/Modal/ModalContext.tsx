import React from "react";

interface ModalContextType {
  onClose: () => void;
}

export const ModalContext = React.createContext<ModalContextType | null>(null);
