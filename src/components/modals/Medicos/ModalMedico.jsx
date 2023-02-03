import React from 'react';
import BtnContent from '../../buttons/BtnContent';
import InputForm from '../../Inputs/formInput/InputForm';
import ModalContainer from '../ModalContainer';

const ModalMedico = ({ modalShowed }) => {
  return (
    <ModalContainer modalShowed={modalShowed}>
      <div className="bg-base-200 w-full h-full p-3">
        <h2 className="text-center text-2xl font-semibold">Añadir Médico</h2>
        <div className="divider mt-2"></div>
        <form className="px-2 ">
          <div className=" flex items-center justify-between">
            <div className="form-group grid grid-cols-2 w-full gap-y-2 md:gap-y-5 gap-x-3">
              <InputForm
                type="text"
                label="Nombres"
                input="input"
                spam={true}
              />
              <InputForm
                type="text"
                label="Apellidos"
                input="input"
                spam={true}
              />
              <InputForm type="number" label="RUC" input="input" spam={true} />
              <InputForm
                type="number"
                label="№ Folio"
                input="input"
                spam={true}
              />
              <div className="col-span-2">
                <InputForm
                  type="number"
                  label="№ Registro Senescyt"
                  input="number"
                  spam={true}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <InputForm
                  type="file"
                  label="Registro Senescyt"
                  input="file-input"
                  spam={false}
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <InputForm
                  type="file"
                  label="Registro Access"
                  input="file-input"
                  spam={false}
                />
              </div>

              <select className="select select-sm select-bordered w-full col-span-2 mt-3 shadow-base-300 shadow-lg">
                <option disabled selected>
                  Especialidad
                  <span className="text-red-500">*</span>
                </option>
                <option>especialidad 1</option>
                <option>especialidad 2</option>
                <option>especialidad 3</option>
                <option>especialidad 4</option>
                <option>especialidad 5</option>
                <option>especialidad 6</option>
                <option>especialidad 7</option>
                <option>especialidad 8</option>
                <option>especialidad 9 </option>
                <option>especialidad 10</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center py-5">
            <BtnContent type="submit">Confirmar</BtnContent>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default ModalMedico;
