import React from 'react';
import NavLeft from '../components/Navbar/NavLeft';
import NavTop from '../components/Navbar/NavTop';
import Overlay from '../components/overlay/Overlay';

const HomeLayout = ({
  children,
  setIsToolbarOpen,
  isToolbarOpen,
  collapsed,
  setCollapsed,
  setSearchInput,
}) => {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <NavTop
          setIsToolbarOpen={setIsToolbarOpen}
          setSearchInput={setSearchInput}
        />
        <Overlay
          isToolbarOpen={isToolbarOpen}
          setIsToolbarOpen={setIsToolbarOpen}
        />
        <NavLeft
          isToolbarOpen={isToolbarOpen}
          setIsToolbarOpen={setIsToolbarOpen}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <div className="h-full flex md:ml-60 pt-14 bg-base-300">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
