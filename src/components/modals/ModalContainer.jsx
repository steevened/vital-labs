import React from 'react';

const ModalContainer = ({ children, modalShowed }) => {
  return (
    <div
      className={`absolute rounded-md shadow-lg shadow-base-content/30 overflow-hidden -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 left-1/2 z-50 max-w-lg transition-all duration-300 ${
        modalShowed ? 'top-1/2' : '-top-full'
      }`}
    >
      {children}
    </div>
  );
};

export default ModalContainer;
