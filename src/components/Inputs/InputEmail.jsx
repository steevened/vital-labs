import React, { useState } from 'react';

const InputEmail = ({}) => {
  const [isValid, setIsValid] = useState(true);

  const inputClass = `w-full py-2 focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]`;

  // const labelClass =
  //   'transition-all absolute pointer-events-none translate-y-2 translate-x-[2px] peer-focus:-translate-y-[20px] peer-valid:-translate-y-[20px] peer-focus:scale-75 peer-focus:text-black/50 peer-valid:text-black/50 peer-focus:-translate-x-1 peer-valid:-translate-x-1 peer-valid:scale-75';

  const labelClass = `transition-all absolute translate-y-2 peer-focus:-translate-y-[20px] peer-valid:-translate-y-[20px]   ${
    !isValid ? '-translate-y-[20px]' : ''
  }`;

  return (
    <>
      <input
        required={true}
        id="email"
        type="email"
        className={inputClass}
        onBlur={(e) => {
          if (e.target.value !== '') {
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
            const valid = emailRegex.test(e.target.value);
            setIsValid(valid);
          } else {
            setIsValid(true);
          }
        }}
      />
      <label className={labelClass} htmlFor="email">
        Email
      </label>

      <div className="absolute right-2 -translate-y-1/2 top-1/2  hover:text-[#00A99D] transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
    </>
  );
};

export default InputEmail;
