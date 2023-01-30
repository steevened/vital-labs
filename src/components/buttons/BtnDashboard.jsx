import React from 'react';

const BtnDashboard = ({ children }) => {
  return (
    <button className="btn btn-block shadow-lg hover:rounded-none active:rounded-none focus:bg-primary-focus focus:rounded-none transition-all btn-primary flex gap-2 duration-500">
      {children}
    </button>
  );
};

export default BtnDashboard;
