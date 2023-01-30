import React from 'react';

const BtnCircle = ({ children, btnAction }) => {
  return (
    <button
      onClick={btnAction}
      className=" text-gray-500 hover:text-gray-700 bg-base-100 rounded-full  p-1 shadow-lg"
    >
      {children}
    </button>
  );
};

export default BtnCircle;
