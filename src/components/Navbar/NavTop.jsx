import React from 'react';
import BtnCircle from '../buttons/BtnCircle';
import { Link, useLocation } from 'react-router-dom';
import BtnAdd from '../buttons/BtnAdd';

const NavTop = ({ setIsToolbarOpen, setSearchInput, setShowModal }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const logOut = () => {
    localStorage.removeItem('username');
  };

  const location = useLocation();

  return (
    <nav className="absolute bg-base-200 shadow-lg flex w-calc md:right-0 h-14 items-center">
      <div className="md:hidden absolute left-7">
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
      <form
        onSubmit={handleSearch}
        className="absolute -translate-x-1/2 left-1/2 md:translate-x-0 md:left-7"
      >
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Buscar"
          className="focus:outline-none shadow-lg  py-1 pl-10 bg-base-100 w-40 sm:w-60 md:w-64 rounded-full"
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
      <div
        className={`z-20 scale-0 md:scale-100 absolute -translate-x-1/2 left-2/3 lg:left-1/2 ${
          location.pathname === '/' ? 'hidden' : ''
        }`}
      >
        <BtnAdd setShowModal={setShowModal} />
      </div>
      <div className="absolute right-7">
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <BtnCircle>
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
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
    </nav>
  );
};

export default NavTop;
