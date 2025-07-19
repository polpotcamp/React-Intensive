import React from "react";

interface CompoundComponentProps {
  children: React.ReactNode;
}

const ModalBody: React.FC<CompoundComponentProps> = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

export default ModalBody;
