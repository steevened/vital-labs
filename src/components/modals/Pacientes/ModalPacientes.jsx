import InputForm from '../../Inputs/formInput/InputForm';
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
      <select className="select select-sm select-bordered w-full col-span-1 mt-3 shadow-base-300 shadow-lg">
        <option disabled selected>
          Estado Civil
          <span className="text-red-500">*</span>
        </option>
        <option>Soltero</option>
        <option>Casado</option>
        <option>Divorciado</option>
        <option>Unión Libre</option>
      </select>
      <select className="select select-sm select-bordered w-full col-span-1 mt-3 shadow-base-300 shadow-lg">
        <option disabled selected>
          Sexo
          <span className="text-red-500">*</span>
        </option>
        <option>Masculino</option>
        <option>Femenino</option>
      </select>
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
