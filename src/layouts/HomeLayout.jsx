import React from 'react';
import NavLeft from '../components/Navbar/NavLeft';
import NavTop from '../components/Navbar/NavTop';
import Overlay from '../components/overlay/Overlay';

const HomeLayout = ({ children, setIsToolbarOpen, isToolbarOpen }) => {
  return (
    <>
      <div className="bg-base-200 h-screen overflow-hidden">
        <NavTop setIsToolbarOpen={setIsToolbarOpen} />
        <Overlay
          isToolbarOpen={isToolbarOpen}
          setIsToolbarOpen={setIsToolbarOpen}
        />
        <NavLeft
          isToolbarOpen={isToolbarOpen}
          setIsToolbarOpen={setIsToolbarOpen}
        />
        <div className="border flex h-full md:ml-60 border-red-500">
          {children}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
