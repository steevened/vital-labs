import React from 'react';
import SelectModal from '../../selects/SelectModal';
import InputForm from '../../Inputs/formInput/InputForm';
import ModalContainer from '../ModalContainer';

const ModalMedico = ({ formData, setFormData, handleSubmit }) => {
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ModalContainer title="Añadir Médico" handleSubmit={handleSubmit}>
      <InputForm
        type="text"
        label="Nombres"
        input="input"
        spam={true}
        cols={1}
        onChange={onChange}
        value={formData.nombres}
        name="nombres"
      />
      <InputForm
        type="text"
        label="Apellidos"
        input="input"
        spam={true}
        value={formData.apellidos}
        onChange={onChange}
        name="apellidos"
      />
      <InputForm
        type="number"
        label="Cédula / RUC"
        input="input"
        spam={true}
        onChange={onChange}
        value={formData.ruc}
        name="ruc"
      />

      <InputForm
        type="number"
        label="№ Folio"
        input="input"
        spam={true}
        value={formData.folio}
        onChange={onChange}
        name="folio"
      />
      <InputForm
        type="number"
        label="№ Registro Senescyt"
        input="number"
        spam={true}
        cols={2}
        onChange={onChange}
        value={formData.senescyt}
        name="senescyt"
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
        value={formData.especialidad}
        onChange={onChange}
        name="especialidad"
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
