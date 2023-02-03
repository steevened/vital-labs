import React from 'react';

export default function SelectModal({ options, title, cols }) {
  return (
    <select
      className={`select select-sm select-bordered w-full mt-3 shadow-base-300 shadow-lg col-span-2  sm:col-span-${
        !cols || cols === 1 ? '1' : cols
      }`}
    >
      <option disabled selected>
        {title}
      </option>
      {options.map((option, i) => (
        <option key={i}>{option}</option>
      ))}
    </select>
  );
}
