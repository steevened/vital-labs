import React from 'react';

const Label = ({ children, htmlFor }) => {
  return (
    <label
      className="transition-all absolute pointer-events-none translate-y-2 translate-x-[2px] peer-focus:-translate-y-[20px] peer-focus:scale-75 peer-focus:text-black/50 peer-valid:text-black/50 peer-focus:-translate-x-1 peer-valid:-translate-x-1  peer-valid:-translate-y-[20px] peer-valid:scale-75 "
      htmlFor="htmlFor"
    >
      {children}
    </label>
  );
};

export default Label;
