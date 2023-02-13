import InputForm from '../../Inputs/formInput/InputForm';
import SelectModal from '../../selects/SelectModal';
import ModalContainer from '../ModalContainer';

export default function ModalPacientes({
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
    <ModalContainer title="Añadir paciente" handleSubmit={handleSubmit}>
      <InputForm
        type="text"
        label="Nombres"
        input="input"
        spam={true}
        onChange={onChange}
        value={formData.nombres}
        name="nombres"
      />
      <InputForm
        type="text"
        label="Apellidos"
        input="input"
        spam={true}
        onChange={onChange}
        value={formData.apellidos}
        name="apellidos"
      />
      <InputForm
        type="number"
        label="№ Cédula"
        input="input"
        spam={true}
        onChange={onChange}
        value={formData.cedula}
        name="cedula"
      />
      <InputForm
        type="date"
        label="Fecha de nacimiento"
        input="input"
        spam={true}
        onChange={onChange}
        value={formData.nacimiento}
        name="nacimiento"
      />
      <SelectModal
        title="Estado Civil"
        options={estadoCiviloptions}
        value={formData.civil}
        onChange={onChange}
        name="civil"
      />
      <SelectModal
        title="Sexo"
        options={sexoOptions}
        value={formData.sexo}
        onChange={onChange}
        name="sexo"
      />
      <InputForm
        type="text"
        label="Dirección"
        input="input"
        spam={true}
        cols="2"
        onChange={onChange}
        value={formData.direccion}
        name="direccion"
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
