import React from 'react';
import SelectModal from '../../selects/SelectModal';
import InputForm from '../../Inputs/formInput/InputForm';
import ModalContainer from '../ModalContainer';

const ModalMedico = ({
  modalShowed,
  setModalShowed,
  nombres,
  apellidos,
  ruc,
  folio,
  senescyt,
  especialidad,
  setNombres,
  setApellidos,
  setRuc,
  setSenescyt,
  setFolio,
  setEspecialidad,
  handleSubmit,
}) => {
  return (
    <ModalContainer
      modalShowed={modalShowed}
      title="Añadir Médico"
      setModalShowed={setModalShowed}
      handleSubmit={handleSubmit}
    >
      <InputForm
        type="text"
        label="Nombres"
        input="input"
        spam={true}
        cols={1}
        setField={setNombres}
        value={nombres}
      />
      <InputForm
        type="text"
        label="Apellidos"
        input="input"
        spam={true}
        setField={setApellidos}
        value={apellidos}
      />
      <InputForm
        type="number"
        label="RUC"
        input="input"
        spam={true}
        setField={setRuc}
        value={ruc}
      />

      <InputForm
        type="number"
        label="№ Folio"
        input="input"
        spam={true}
        setField={setFolio}
        value={folio}
      />
      <InputForm
        type="number"
        label="№ Registro Senescyt"
        input="number"
        spam={true}
        cols={2}
        setField={setSenescyt}
        value={senescyt}
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
        value={especialidad}
        setValue={setEspecialidad}
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
