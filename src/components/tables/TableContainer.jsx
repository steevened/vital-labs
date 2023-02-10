import React from 'react';
import Table from './Table';

export default function TableContainer({ children }) {
  return (
    <div className="overflow-x-auto h-full bg-base-200 max-h-[90%] shadow-lg w-full relative">
      {children}
    </div>
  );
}
