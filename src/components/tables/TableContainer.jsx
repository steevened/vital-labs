import React from 'react';

export default function TableContainer({ children }) {
  return (
    <div className="overflow-x-auto h-[90%] shadow-lg w-full">
      <table className="table w-full">{children}</table>
    </div>
  );
}
