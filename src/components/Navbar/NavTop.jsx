import React from 'react';
import BtnCircle from '../buttons/BtnCircle';
import { Link } from 'react-router-dom';

const NavTop = ({ setIsToolbarOpen }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const logOut = () => {
    localStorage.removeItem('username');
  };

  return (
    <div className="flex justify-between  w-full md:ml-60 h-14 items-center px-5  ">
      <div className="md:hidden ">
        <BtnCircle btnAction={() => setIsToolbarOpen(true)}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </BtnCircle>
      </div>
      <form onSubmit={handleSearch} className="relative">
        <input
          placeholder="Buscar"
          className=" input focus:outline-none shadow-lg input-sm pl-10 bg-base-100 w-36 sm:w-60 md:w-80 rounded-none"
          type="text"
          id="search"
        />
        <div className="absolute -translate-y-1/2 top-1/2 left-2">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </form>
      <div className="md:absolute md:right-5">
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <BtnCircle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </BtnCircle>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            <li>
              <Link onClick={logOut} to="/login" href="#">
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
                    d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
                <span>Cerrar sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
