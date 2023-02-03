import React from 'react';

export default function InputForm({ label, type, input, spam }) {
  return (
    <div className={`flex flex-col w-full`}>
      <label className="text-sm flex items-center m-1">
        <p>{label}</p>
        {spam && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        className={`${input} ${
          input === 'file-input'
            ? 'file-input-sm file-input-info file-input-bordered'
            : 'input-sm'
        }  outline-none input-bordered focus:outline-none focus:ring focus:ring-neutral-content rounded-md`}
        required={true}
      />
    </div>
  );
}
