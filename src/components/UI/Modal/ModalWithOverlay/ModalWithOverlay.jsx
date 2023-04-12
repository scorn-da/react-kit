import React from 'react';
import Overlay from "src/components/UI/Overlay/Overlay";
import Modal from "src/components/UI/Modal/Modal";

const ModalWithOverlay = ({children, isActive, setIsActive}) => {
  return (
      <Overlay isActive={isActive} setIsActive={setIsActive}>
        <Modal isActive={isActive}>
          {children}
        </Modal>
      </Overlay>
  );
};

export default ModalWithOverlay;