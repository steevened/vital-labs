import React from 'react';
import SelectModal from '../../selects/SelectModal';
import InputForm from '../../Inputs/formInput/InputForm';
import ModalContainer from '../ModalContainer';

const ModalMedico = ({ modalShowed }) => {
  return (
    <ModalContainer modalShowed={modalShowed} title="Añadir Médico">
      <InputForm type="text" label="Nombres" input="input" spam={true} />
      <InputForm type="text" label="Apellidos" input="input" spam={true} />
      <InputForm type="number" label="RUC" input="input" spam={true} />
      <InputForm type="number" label="№ Folio" input="input" spam={true} />

      <InputForm
        type="number"
        label="№ Registro Senescyt"
        input="number"
        spam={true}
      />

      <InputForm
        type="file"
        label="Registro Senescyt"
        input="file-input"
        spam={false}
      />

      <InputForm
        type="file"
        label="Registro Access"
        input="file-input"
        spam={false}
      />

      <SelectModal
        cols="2"
        title="Especialidad"
        options={especialidadOptions}
      />
    </ModalContainer>
  );
};

const especialidadOptions = [
  'especialidad 1',
  'especialidad 2',
  'especialidad 3',
  'especialidad 4',
  'especialidad 5',
  'especialidad 6',
  'especialidad 7',
  'especialidad 8',
  'especialidad 9',
  'especialidad 10',
];

export default ModalMedico;
