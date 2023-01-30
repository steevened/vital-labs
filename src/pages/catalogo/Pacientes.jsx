import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';

const Pacientes = ({ isToolbarOpen, setIsToolbarOpen }) => {
  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
    >
      <div className="flex items-center justify-center w-full">contenido</div>
    </HomeLayout>
  );
};

export default Pacientes;
