import React from 'react';
import ModalContainer from '../ModalContainer';

const ModalMedico = ({ modalShowed }) => {
  return (
    <ModalContainer modalShowed={modalShowed}>
      <div className="bg-base-100 w-full h-full">
        <h2 className="text-center">Añadir Médico</h2>
      </div>
    </ModalContainer>
  );
};

export default ModalMedico;
