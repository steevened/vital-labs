import React, { useState } from 'react';
import InputPassword from './Inputs/InputPassword';
import InputEmail from './Inputs/InputEmail';
import InputGroup from './Inputs/InputGroup';
import Label from './Inputs/Label';
import ShowPassword from './Inputs/ShowPassword';
import logo from '../assets/logo.png';

const Login = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  // console.log(isValid);

  return (
    <div
      className={`text-[#004841 ] relative transition-all h-full w-full min-h-screen bg-cover bg-center bg-[url('../src/assets/logo5.jpg')] `}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/60 backdrop-blur-sm"></div>
      <div className="w-full transition-all sm:w-2/3 md:w-1/2 h-full bg-[#EAFDFA]/80 backdrop-blur-lg absolute right-0 shadow-lg shadow-gray-700 flex flex-col items-center justify-center">
        <h1 className="text-center mt-10 text-5xl font-bold">Bienvenido</h1>
        <form className="w-2/3 max-w-xs mx-auto mb-16">
          <InputGroup>
            <InputEmail />
          </InputGroup>
          <InputGroup>
            <InputPassword isPasswordHidden={isPasswordHidden} />
            <Label htmlFor="password">Contraseña</Label>
            <ShowPassword
              isPasswordHidden={isPasswordHidden}
              setIsPasswordHidden={setIsPasswordHidden}
            />
          </InputGroup>
          <button className="btn shadow-lg btn-block bg-[#00A99D] hover:bg-[#39BC99] border-none rounded-none mt-10">
            <span className="mr-1">
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </span>
            Ingresar
          </button>

          <div className="absolute w-36 h-36 z-10 top-7 -translate-x-1/2 left-1/2 rotate-[0.5deg] ">
            <img src={logo} alt="logo" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
