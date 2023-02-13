import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function MainLoader() {
  return (
    <div className="absolute  inset-0 flex items-center justify-center">
      <Oval
        height={50}
        width={50}
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
