import React from 'react';

const BtnCircle = ({ children, btnAction }) => {
  return (
    <button
      onClick={btnAction}
      className="btn text-gray-500 btn-circle bg-transparent btn-ghost btn-sm"
    >
      {children}
    </button>
  );
};

export default BtnCircle;
