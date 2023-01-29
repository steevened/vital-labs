import React, { useState } from 'react';

const InputEmail = ({}) => {
  const inputClass = `w-full py-2 focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]`;

  return (
    <input
      required={true}
      pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'}
      id="email"
      type="email"
      className={inputClass}
    />
  );
};

export default InputEmail;
