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
  const [addMedicModalShowed, setAddMedicModalShowed] = useState(true);

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    >
      <div className="flex items-center justify-center w-[90%] mx-auto flex-col gap-10">
        <div
          onClick={() => setAddMedicModalShowed(true)}
          className="flex items-center justify-center border border-red-500"
        >
          <BtnContent>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>

            <span>Añadir</span>
          </BtnContent>
        </div>
        <MedicosTable />
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
