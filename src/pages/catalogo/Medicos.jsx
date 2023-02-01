import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import MedicosTable from '../../components/tables/medicos/Medicos';
import BtnCircle from '../../components/buttons/BtnCircle';
const Medicos = ({
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
      <div className="flex items-center justify-center w-[90%] mx-auto flex-col gap-10">
        <div className="flex items-center justify-center mt-5">
          <button className="bg-p-to text-white hover:bg-[#77ceca] transition-all active:scale-95 px-5 py-1 rounded-full font-bold shadow-lg shadow-black/20">
            Añadir{' '}
          </button>
        </div>
        <MedicosTable collapsed={collapsed} />
      </div>
    </HomeLayout>
  );
};

export default Medicos;
