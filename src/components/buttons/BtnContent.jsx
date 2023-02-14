import React from 'react';
import useModalStore from '../../store/VitalStore';

export default function BtnContent({ children, type, cancel }) {
  const { closeModal, fieldsDisabled } = useModalStore((state) => state);

  if (cancel) {
    return (
      <div
        onClick={() => closeModal()}
        className={`bg-red-400 hover:bg-red-700 cursor-pointer 
        text-white  transition-all active:scale-95 p-3 md:py-1 rounded-full font-bold shadow-lg shadow-base-content/30 flex items-center gap-1 justify-center`}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      type={type && type}
      disabled={fieldsDisabled}
      className={`
        text-white  transition-all  p-3 md:py-1 rounded-full font-bold shadow-lg shadow-base-content/30 flex items-center gap-1 justify-center ${
          fieldsDisabled && type === 'submit'
            ? 'bg-gray-300'
            : 'bg-p-to hover:bg-[#77ceca] active:scale-95'
        }`}
    >
      {children}
    </button>
  );
}
