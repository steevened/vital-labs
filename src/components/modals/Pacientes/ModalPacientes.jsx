import InputForm from '../../Inputs/formInput/InputForm';
import SelectModal from '../../selects/SelectModal';
import ModalContainer from '../ModalContainer';

export default function ModalPacientes({ modalShowed }) {
  return (
    <ModalContainer title="Añadir paciente" modalShowed={modalShowed}>
      <InputForm type="text" label="Nombres" input="input" spam={true} />
      <InputForm type="text" label="Apellidos" input="input" spam={true} />
      <InputForm type="number" label="№ Cédula" input="input" spam={true} />
      <InputForm
        type="date"
        label="Fecha de nacimiento"
        input="input"
        spam={true}
      />
      <SelectModal title="Estado Civil" options={estadoCiviloptions} />
      <SelectModal title="Sexo" options={sexoOptions} />
      <InputForm
        type="text"
        label="Dirección"
        input="input"
        spam={true}
        cols="2"
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
