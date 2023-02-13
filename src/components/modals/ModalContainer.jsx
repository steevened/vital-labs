import React from 'react';
import BtnContent from '../buttons/BtnContent';
import useModalStore from '../../store/VitalStore';

const ModalContainer = ({ children, title, handleSubmit }) => {
  const { isModalOpen } = useModalStore();

  return (
    <div
      className={`absolute overflow-auto  rounded-md shadow-lg shadow-base-content/30  -translate-x-1/2 -translate-y-1/2 w-5/6 h-fit max-h-[600px] left-1/2 z-50 max-w-lg transition-all duration-300 ${
        isModalOpen ? 'top-1/2' : '-top-full'
      }`}
    >
      <div className="bg-base-200 w-full h-full p-3">
        <h2 className="text-center text-2xl font-semibold">{title}</h2>
        <div className="divider mt-2"></div>
        <form onSubmit={handleSubmit} className="px-2">
          <div className=" flex items-center justify-between">
            <div className="form-group grid grid-cols-2 w-full gap-y-2 md:gap-y-5 gap-x-3">
              {children}
            </div>
          </div>
          <div className="flex items-center justify-center py-5 gap-10">
            <BtnContent type="submit">Confirmar</BtnContent>
            <BtnContent cancel={true}>Cancelar</BtnContent>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalContainer;
