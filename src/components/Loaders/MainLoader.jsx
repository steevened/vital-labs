import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function MainLoader() {
  return (
    <div className="absolute z-50 inset-0 flex items-center justify-center">
      <Oval
        height={80}
        width={80}
        color="#00a99d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
