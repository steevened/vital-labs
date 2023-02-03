import { useState } from 'react';
import PacientesTable from '../../components/tables/pacientes/PacientesTable';
import HomeLayout from '../../layouts/HomeLayout';

const Pacientes = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addPersonModalShowed, setAddPersonModalShowed] = useState(false);

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    >
      <div className="flex items-center justify-center w-[95%] mx-auto flex-col">
        <PacientesTable setAddPersonModalShowed={setAddPersonModalShowed} />
      </div>
    </HomeLayout>
  );
};

export default Pacientes;
