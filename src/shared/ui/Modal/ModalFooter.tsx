import React from "react";

interface CompoundComponentProps {
  children: React.ReactNode;
}

const ModalFooter: React.FC<CompoundComponentProps> = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export default ModalFooter;
