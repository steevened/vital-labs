import HomeLayout from '../../layouts/HomeLayout';
import MedicosTable from '../../components/tables/medicos/Medicos';
import ModalMedico from '../../components/modals/Medicos/ModalMedico';
import ModalOverlay from '../../components/modals/ModalOverlay';
import { useState } from 'react';
import BtnContainer from '../../components/buttons/BtnContainer';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';
import MainLoader from '../../components/Loaders/MainLoader';

const Medicos = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addMedicModalShowed, setAddMedicModalShowed] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const fetchMedicos = () =>
    fetch(' http://localhost:3000/medicos').then((res) => res.json());

  const { isLoading, error, data } = useQuery('medicosData', fetchMedicos);

  if (isLoading) return <MainLoader />;

  if (error) return 'An error occurred: ' + error.message;

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
      setShowModal={setAddMedicModalShowed}
    >
      <div className="flex items-center justify-start mt-12 w-[95%]  mx-auto flex-col ">
        <MedicosTable
          searchInput={searchInput}
          setAddMedicModalShowed={setAddMedicModalShowed}
          data={data}
        />
      </div>
      <ModalOverlay
        modalShowed={addMedicModalShowed}
        setModalShowed={setAddMedicModalShowed}
      />
      <ModalMedico
        modalShowed={addMedicModalShowed}
        setModalShowed={setAddMedicModalShowed}
      />
      <BtnContainer setShowModal={setAddMedicModalShowed} />
    </HomeLayout>
  );
};

export default Medicos;
