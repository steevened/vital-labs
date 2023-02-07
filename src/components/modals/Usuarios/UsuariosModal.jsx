import React from 'react';
import InputForm from '../../Inputs/formInput/InputForm';
import SelectModal from '../../selects/SelectModal';
import ModalContainer from '../ModalContainer';

export default function UsuariosModal({
  modalShowed,
  setModalShowed,
  handleSubmit,
  username,
  setUsername,
  names,
  setNames,
  email,
  setEmail,
  cargo,
  setCargo,
  rol,
  setRol,
}) {
  return (
    <ModalContainer
      title="Añadir Usuarios"
      modalShowed={modalShowed}
      setModalShowed={setModalShowed}
      handleSubmit={handleSubmit}
    >
      <InputForm
        type="text"
        label="Nombre de usuario"
        spam={true}
        value={username}
        setField={setUsername}
      />
      <InputForm
        type="email"
        label="Email"
        spam={true}
        value={email}
        setField={setEmail}
      />
      <InputForm
        type="text"
        label="Nombres"
        spam={true}
        cols="2"
        value={names}
        setField={setNames}
      />
      <SelectModal
        title="Cargo"
        options={cargoOptions}
        value={cargo}
        setValue={setCargo}
      />
      <SelectModal
        title="Rol"
        options={rolOptions}
        setValue={setRol}
        value={rol}
      />
    </ModalContainer>
  );
}

const cargoOptions = ['cargo 1', 'cargo 2', 'cargo 3', 'cargo 4'];

const rolOptions = ['Rol 1', 'Rol 2', 'Rol 3'];
