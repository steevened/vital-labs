import React, { useState } from 'react';
import Input from './Inputs/Input';
import InputGroup from './Inputs/InputGroup';
import Label from './Inputs/Label';
import ShowPassword from './Inputs/ShowPassword';

const Login = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <div
      className={`text-slate-900 relative transition-all  h-full w-full min-h-screen bg-cover bg-left bg-[url('../src/assets/login2.jpg')]`}
    >
      <div className="w-full transition-all sm:w-2/3 md:w-1/2 h-full bg-blue-50/95 backdrop-blur-lg absolute right-0 shadow-lg shadow-black flex flex-col items-center justify-center">
        <h1 className="text-center mt-10 text-5xl font-medium">Bienvenido</h1>
        <form className="w-2/3 max-w-xs mx-auto mb-16">
          <InputGroup>
            <Input type="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </InputGroup>
          <InputGroup>
            <Input
              type={isPasswordHidden ? 'password' : 'text'}
              id="password"
              isPasswordHidden={isPasswordHidden}
            />
            <Label htmlFor="password">Password</Label>
            <ShowPassword
              isPasswordHidden={isPasswordHidden}
              setIsPasswordHidden={setIsPasswordHidden}
            />
          </InputGroup>
          <button className="btn btn-block rounded-none mt-10">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
