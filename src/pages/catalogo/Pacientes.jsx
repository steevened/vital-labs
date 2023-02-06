import { useState } from 'react';
import BtnContainer from '../../components/buttons/BtnContainer';
import ModalOverlay from '../../components/modals/ModalOverlay';
import ModalPacientes from '../../components/modals/Pacientes/ModalPacientes';
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

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
      setShowModal={setAddPersonModalShowed}
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
      <ModalPacientes modalShowed={addPersonModalShowed} />
      <BtnContainer setShowModal={setAddPersonModalShowed} />
    </HomeLayout>
  );
};

export default Pacientes;
