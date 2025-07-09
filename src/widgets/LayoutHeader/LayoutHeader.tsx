import React, { type FC } from "react";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import Modal from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";
const LayoutHeader: FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  const closeModal = () => setModalOpen(false);
  return (
    <header>
      <Button onClick={toggleModal}>
        Открыть модальное окно с информацией о проекте
      </Button>
      <ThemeSwitcher />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          Информация о проекте Информация о проекте Информация о проекте
          Информация о проекте
        </Modal>
      )}
    </header>
  );
};

export default LayoutHeader;
