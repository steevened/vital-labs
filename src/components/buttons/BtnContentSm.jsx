import React from 'react';

export default function BtnContentSm({ children }) {
  return (
    <button className="bg-primary-content  hover:bg-[#77ceca] transition-all active:scale-95 px-3 py-1 rounded-lg font-bold shadow-lg shadow-base-content/30 flex items-center gap-1 justify-center text-sm">
      {children}
    </button>
  );
}
