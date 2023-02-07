import { useState } from 'react';
import { useQuery } from 'react-query';
import BtnContainer from '../../components/buttons/BtnContainer';
import MainLoader from '../../components/Loaders/MainLoader';
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

  const { isLoading, error, data } = useQuery('pacientesData', () =>
    fetch('http://localhost:3000/pacientes').then((res) => res.json())
  );

  if (isLoading) return <MainLoader />;
  if (error) return 'An error occurred' + error.message;

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
      setShowModal={setAddPersonModalShowed}
    >
      <div className="flex items-center justify-start mt-12 w-[95%] mx-auto flex-col">
        <PacientesTable
          searchInput={searchInput}
          setAddPersonModalShowed={setAddPersonModalShowed}
          data={data}
        />
      </div>
      <ModalOverlay
        modalShowed={addPersonModalShowed}
        setModalShowed={setAddPersonModalShowed}
      />
      <ModalPacientes
        modalShowed={addPersonModalShowed}
        setShowModal={setAddPersonModalShowed}
      />
      <BtnContainer setShowModal={setAddPersonModalShowed} />
    </HomeLayout>
  );
};

export default Pacientes;
