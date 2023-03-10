import React, { useEffect, useState } from 'react';
import SelectModal from '../../selects/SelectModal';
import InputForm from '../../Inputs/formInput/InputForm';
import ModalContainer from '../ModalContainer';
import { UseFetchMedicos } from '../../../hooks/UseMedicos';
import useModalStore from '../../../store/VitalStore';

const ModalMedico = ({ formData, setFormData, handleSubmit, cleanValues }) => {
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { data: medicos } = UseFetchMedicos();

  const { nombres, apellidos, ruc, folio, senescyt, especialidad, access } =
    formData;

  const { idOpen, fieldsDisabled } = useModalStore((state) => state);

  useEffect(() => {
    if (idOpen) {
      const medico = medicos.find((medico) => medico.id === idOpen);
      setFormData(medico);
    } else {
      cleanValues();
    }
  }, [idOpen]);

  return (
    <ModalContainer
      title={fieldsDisabled ? 'Médico' : 'Añadir Médico'}
      handleSubmit={handleSubmit}
      fieldsDisabled={fieldsDisabled}
      idOpen={idOpen}
    >
      <InputForm
        type="text"
        label="Nombres"
        input="input"
        spam={true}
        cols={1}
        onChange={onChange}
        value={nombres}
        name="nombres"
        fieldsDisabled={fieldsDisabled}
      />
      <InputForm
        type="text"
        label="Apellidos"
        input="input"
        spam={true}
        value={apellidos}
        onChange={onChange}
        name="apellidos"
        fieldsDisabled={fieldsDisabled}
      />
      <InputForm
        type="number"
        label="Cédula / RUC"
        input="input"
        spam={true}
        onChange={onChange}
        value={ruc}
        name="ruc"
        fieldsDisabled={fieldsDisabled}
      />

      <InputForm
        type="number"
        label="№ Folio"
        input="input"
        spam={true}
        value={folio}
        onChange={onChange}
        name="folio"
        fieldsDisabled={fieldsDisabled}
      />
      <InputForm
        type="number"
        label="№ Registro Senescyt"
        input="number"
        spam={true}
        // cols={2}
        onChange={onChange}
        value={senescyt}
        name="senescyt"
        fieldsDisabled={fieldsDisabled}
      />
      <InputForm
        type="number"
        label="№ Access"
        input="access"
        spam={true}
        // cols={2}
        onChange={onChange}
        value={access}
        name="access"
        fieldsDisabled={fieldsDisabled}
      />
      <SelectModal
        cols="2"
        title="Especialidad"
        options={especialidadOptions}
        value={especialidad}
        onChange={onChange}
        name="especialidad"
        fieldsDisabled={fieldsDisabled}
      />
      <InputForm
        type="file"
        label="Registro Senescyt"
        input="file-input"
        spam={false}
        fieldsDisabled={fieldsDisabled}
      />
      <InputForm
        type="file"
        label="Registro Access"
        input="file-input"
        spam={false}
        fieldsDisabled={fieldsDisabled}
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
