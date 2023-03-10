import React from 'react';
import useModalStore from '../../store/VitalStore';

const ModalOverlay = () => {
  const { isModalOpen, closeModal, unselectId } = useModalStore(
    (state) => state
  );

  return (
    <div
      onClick={() => {
        closeModal();
        unselectId();
      }}
      className={`absolute inset-0 bg-black/50 z-40 backdrop-blur-[2px] transition-all duration-500 ${
        isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    ></div>
  );
};

export default ModalOverlay;
