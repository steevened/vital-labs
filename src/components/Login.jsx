import React from 'react';

const Login = () => {
  return (
    <div
      className={`text-slate-900 relative transition-all  h-full w-full min-h-screen bg-cover bg-center bg-[url('../src/assets/login.jpg')]`}
    >
      <div className="w-full transition-all sm:w-2/3 md:w-1/2 h-full bg-white/80 backdrop-blur-lg absolute right-0">
        <div>
          <h1 className="text-center mt-10 font-bold text-3xl">Bienvenido</h1>
          <div className="relative flex flex-col  w-2/3 mx-auto mt-10 ">
            <input
              required
              type="email"
              id="email"
              className="w-full py-2 focus:outline-none peer bg-transparent border-b border-slate-900"
            />
            <label
              htmlFor="email"
              className="transition-all absolute pointer-events-none peer-focus:-translate-y-[15px] peer-focus:scale-75 peer-focus:text-black/50 peer-focus:-translate-x-1  peer-valid:-translate-y-full peer-valid:scale-90 peer-valid:bg-black peer-valid:text-[#00C896]"
            >
              Email
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
