import { useState } from 'react';
import ModalOverlay from '../../components/modals/ModalOverlay';
import PacientesTable from '../../components/tables/pacientes/PacientesTable';
import HomeLayout from '../../layouts/HomeLayout';

const Pacientes = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addPersonModalShowed, setAddPersonModalShowed] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  console.log(searchInput);

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
    >
      <div className="flex items-center justify-center w-[95%] mx-auto flex-col">
        <PacientesTable
          searchInput={searchInput}
          setAddPersonModalShowed={setAddPersonModalShowed}
        />
      </div>
      <ModalOverlay
        modalShowed={addPersonModalShowed}
        setModalShowed={setAddPersonModalShowed}
      />
    </HomeLayout>
  );
};

export default Pacientes;
