import React from 'react';

const ModalOverlay = ({ modalShowed, setModalShowed }) => {
  return (
    <div
      onClick={() => setModalShowed(false)}
      className={`absolute inset-0 bg-black/50 z-40 backdrop-blur-[2px] transition-all duration-500 ${
        modalShowed ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    ></div>
  );
};

export default ModalOverlay;
