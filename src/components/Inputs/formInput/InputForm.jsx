import React from 'react';

export default function InputForm({
  label,
  type,
  input,
  spam,
  cols,
  onChange,
  value,
  name,
}) {
  return (
    <div
      className={`flex flex-col w-full cols  cols-${
        !cols || cols === 1 ? '1' : cols
      }`}
    >
      <label className="text-sm flex items-center m-1">
        <p>{label}</p>
        {spam === true && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={`${input} ${
          input === 'file-input'
            ? 'file-input-sm file-input-info file-input-bordered  '
            : 'input-sm'
        }  outline-none input-bordered focus:outline-none focus:ring focus:ring-neutral-content rounded-md shadow-base-300 shadow-lg`}
        required={spam}
      />
    </div>
  );
}
