import HomeLayout from '../../layouts/HomeLayout';
import MedicosTable from '../../components/tables/medicos/Medicos';
import BtnContent from '../../components/buttons/BtnContent';
import ModalMedico from '../../components/modals/Medicos/ModalMedico';
import ModalOverlay from '../../components/modals/ModalOverlay';
import { useState } from 'react';

const Medicos = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addMedicModalShowed, setAddMedicModalShowed] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
    >
      <div className="flex items-center justify-center w-[95%] mx-auto flex-col">
        <MedicosTable
          searchInput={searchInput}
          setAddMedicModalShowed={setAddMedicModalShowed}
        />
      </div>
      <ModalOverlay
        modalShowed={addMedicModalShowed}
        setModalShowed={setAddMedicModalShowed}
      />
      <ModalMedico modalShowed={addMedicModalShowed} />
    </HomeLayout>
  );
};

export default Medicos;
