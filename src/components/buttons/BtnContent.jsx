import React from 'react';

export default function BtnContent({ children }) {
  return (
    <button className="bg-p-to text-white hover:bg-[#77ceca] transition-all active:scale-95 px-4 py-2 rounded-full font-bold shadow-lg shadow-black/20 flex items-center gap-1 justify-center">
      {children}
    </button>
  );
}
