import React from 'react';

const ModalOverlay = ({ modalShowed, setModalShowed }) => {
  return (
    <div
      onClick={() => setModalShowed(false)}
      className={`absolute inset-0 bg-black/50 z-40 backdrop-blur-[2px] ${
        modalShowed ? 'opacity-100' : 'opacity-0 pointer-events-none -z-10'
      }`}
    ></div>
  );
};

export default ModalOverlay;
