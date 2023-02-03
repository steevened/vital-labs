import React from 'react';

export default function BtnContent({ children, type }) {
  return (
    <button
      type={type && type}
      className="bg-p-to text-white hover:bg-[#77ceca] transition-all active:scale-95 p-1 rounded-lg font-bold shadow-lg shadow-base-content/30 flex items-center gap-1 justify-center"
    >
      {children}
    </button>
  );
}
