import React from 'react';
import Overlay from "src/components/UI/Overlay/Overlay";
import Modal from "src/components/UI/Modal/Modal";

const ModalWithOverlay = ({children, isActive}) => {
  return (
      <Overlay isActive={isActive}>
        <Modal isActive={isActive}>
          {children}
        </Modal>
      </Overlay>
  );
};

export default ModalWithOverlay;