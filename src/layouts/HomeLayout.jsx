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
}) => {
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
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <div className="flex h-full md:ml-60 bg-base-100">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
