import React, { useState } from 'react';

const Input = ({ isPasswordHidden }) => {
  const inputClasses = `w-full py-2 focus:outline-none peer  bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)] `;

  return (
    <input
      required={true}
      pattern={'^[a-zA-Z0-9]{4,}$'}
      id="password"
      type={isPasswordHidden ? 'password' : 'text'}
      className={inputClasses}
    />
  );
};

export default Input;
