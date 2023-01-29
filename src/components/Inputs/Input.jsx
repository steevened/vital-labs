import React from 'react';

const Input = ({ type, id }) => {
  return (
    <input
      required={true}
      id={id}
      type={type}
      className="w-full py-2 focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]"
    />
  );
};

export default Input;
