import React from 'react';
import ModalContainer from '../ModalContainer';

const ModalMedico = ({ modalShowed }) => {
  return (
    <ModalContainer modalShowed={modalShowed}>
      <div className="bg-base-200 w-full h-full p-3">
        <h2 className="text-center text-2xl font-semibold">Añadir Médico</h2>
        <div className="divider mt-2"></div>
      </div>
    </ModalContainer>
  );
};

export default ModalMedico;
