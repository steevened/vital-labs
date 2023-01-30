import React, { useState } from 'react';
import Label from './Label';

const Input = ({ children, id, type, isPasswordHidden }) => {
  const inputClass = `w-full py-2 focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]`;

  return (
    <>
      <input required={true} id={id} type={type} className={inputClass} />
    </>
  );
};

export default Input;
