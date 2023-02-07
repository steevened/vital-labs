import InputForm from '../../Inputs/formInput/InputForm';
import SelectModal from '../../selects/SelectModal';
import ModalContainer from '../ModalContainer';

export default function ModalPacientes({
  modalShowed,
  setShowModal,
  handleSubmit,
  ...props
}) {
  return (
    <ModalContainer
      title="Añadir paciente"
      modalShowed={modalShowed}
      setModalShowed={setShowModal}
      handleSubmit={handleSubmit}
    >
      <InputForm
        type="text"
        label="Nombres"
        input="input"
        spam={true}
        setField={props.setNombres}
        value={props.nombres}
      />
      <InputForm
        type="text"
        label="Apellidos"
        input="input"
        spam={true}
        setField={props.setApellidos}
        value={props.apellidos}
      />
      <InputForm
        type="number"
        label="№ Cédula"
        input="input"
        spam={true}
        setField={props.setCedula}
        value={props.cedula}
      />
      <InputForm
        type="date"
        label="Fecha de nacimiento"
        input="input"
        spam={true}
        setField={props.setNacimiento}
        value={props.nacimiento}
      />
      <SelectModal
        title="Estado Civil"
        options={estadoCiviloptions}
        setValue={props.setCivil}
        value={props.civil}
      />
      <SelectModal
        title="Sexo"
        options={sexoOptions}
        setValue={props.setSexo}
        value={props.sexo}
      />
      <InputForm
        type="text"
        label="Dirección"
        input="input"
        spam={true}
        cols="2"
        setField={props.setDireccion}
        value={props.direccion}
      />
    </ModalContainer>
  );
}

const estadoCiviloptions = [
  'Soltero',
  'Casado',
  'Divorciado',
  'Viudo',
  'Unión libre',
];

const sexoOptions = ['Masculino', 'Femenino'];
