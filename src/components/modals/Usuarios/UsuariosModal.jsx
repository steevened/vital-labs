import React from 'react';
import InputForm from '../../Inputs/formInput/InputForm';
import SelectModal from '../../selects/SelectModal';
import ModalContainer from '../ModalContainer';

export default function UsuariosModal({
  modalShowed,
  setModalShowed,
  handleSubmit,
  formData,
  setFormData,
}) {
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        value={formData.username}
        onChange={onChange}
        name="username"
      />
      <InputForm
        type="email"
        label="Email"
        spam={true}
        value={formData.email}
        onChange={onChange}
        name="email"
      />
      <InputForm
        type="text"
        label="Nombres"
        spam={true}
        // cols="2"
        value={formData.names}
        onChange={onChange}
        name="names"
      />
      <InputForm
        type="text"
        label="Apellidos"
        spam={true}
        // cols="2"
        value={formData.lastnames}
        onChange={onChange}
        name="lastnames"
      />
      <SelectModal
        title="Cargo"
        options={cargoOptions}
        value={formData.cargo}
        onChange={onChange}
        name="cargo"
      />
      <SelectModal
        title="Rol"
        options={rolOptions}
        value={formData.rol}
        onChange={onChange}
        name="rol"
      />
    </ModalContainer>
  );
}

const cargoOptions = ['cargo 1', 'cargo 2', 'cargo 3', 'cargo 4'];

const rolOptions = ['Rol 1', 'Rol 2', 'Rol 3'];
