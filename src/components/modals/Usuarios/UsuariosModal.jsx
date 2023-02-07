import React from 'react';
import InputForm from '../../Inputs/formInput/InputForm';
import SelectModal from '../../selects/SelectModal';
import ModalContainer from '../ModalContainer';

export default function UsuariosModal({ modalShowed, setModalShowed }) {
  return (
    <ModalContainer
      title="Añadir Usuarios"
      modalShowed={modalShowed}
      setModalShowed={setModalShowed}
    >
      <InputForm type="text" label="Nombre de usuario" spam={true} />
      <InputForm type="email" label="Email" spam={true} />
      <InputForm type="text" label="Nombres" spam={true} cols="2" />
      <SelectModal title="Cargo" options={cargoOptions} />
      <SelectModal title="Rol" options={rolOptions} />
    </ModalContainer>
  );
}

const cargoOptions = ['cargo 1', 'cargo 2', 'cargo 3', 'cargo 4'];

const rolOptions = ['Rol 1', 'Rol 2', 'Rol 3'];
