import React from 'react';
import useModalStore from '../../store/VitalStore';

export default function BtnContent({ children, type, cancel }) {
  const { closeModal } = useModalStore((state) => state);

  if (cancel) {
    return (
      <button
        onClick={() => closeModal()}
        className={`bg-red-400 hover:bg-red-700 
        text-white  transition-all active:scale-95 p-3 md:py-1 rounded-full font-bold shadow-lg shadow-base-content/30 flex items-center gap-1 justify-center`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type && type}
      className={`bg-p-to hover:bg-[#77ceca]
        text-white  transition-all active:scale-95 p-3 md:py-1 rounded-full font-bold shadow-lg shadow-base-content/30 flex items-center gap-1 justify-center`}
    >
      {children}
    </button>
  );
}
