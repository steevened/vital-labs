import React, { useState } from 'react';
import Input from '../components/Inputs/Input';
import InputGroup from '../components/Inputs/InputGroup';
import Label from '../components/Inputs/Label';
import ShowPassword from '../components/Inputs/ShowPassword';
import logo from '../assets/logo.png';
import UserLogo from '../components/Inputs/UserLogo';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== '' || password !== '') {
      localStorage.setItem('username', username);
      navigate('/');
    }
  };

  return (
    <div
      className={`text-[#004841 ] relative transition-all h-full w-full min-h-screen bg-cover bg-center bg-[url('../src/assets/logo6.jpg')] `}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/60 backdrop-blur-sm"></div>
      <div className="w-full transition-all sm:w-2/3 md:w-1/2 h-full bg-[#EAFDFA]/20 sm:bg-[#EAFDFA]/50 backdrop-blur-lg absolute right-0 shadow-lg shadow-gray-700 flex flex-col items-center justify-center">
        <h1 className="text-center mt-10 text-5xl font-bold">Bienvenido</h1>
        <form onSubmit={handleSubmit} className="w-2/3 max-w-xs mx-auto mb-16">
          <InputGroup>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              setUsername={setUsername}
              id="username"
              type="text"
            />
            <Label htmlFor="username">Usuario</Label>
            <UserLogo />
          </InputGroup>
          <InputGroup>
            <Input
              isPasswordHidden={isPasswordHidden}
              type={isPasswordHidden ? 'password' : 'text'}
            />
            <Label htmlFor="password">Contraseña</Label>
            <ShowPassword
              isPasswordHidden={isPasswordHidden}
              setIsPasswordHidden={setIsPasswordHidden}
            />
          </InputGroup>
          <button className="btn shadow-lg btn-block bg-[#00A99D] hover:bg-[#39BC99] border-none rounded-none mt-10 text-white">
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
        </form>
      </div>
      <div className="absolute w-24 h-24 z-10 -translate-x-1/2 top-5 left-1/2  sm:translate-x-0  sm:top-[85%] sm:left-5 rotate-[0.5deg] ">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Login;
