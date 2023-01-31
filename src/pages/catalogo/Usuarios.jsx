import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';

const Usuarios = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    >
      <div className="flex items-center justify-center w-full">Usuarios</div>
    </HomeLayout>
  );
};

export default Usuarios;
