import HomeLayout from '../../layouts/HomeLayout';
import MedicosTable from '../../components/tables/medicos/Medicos';
import ModalMedico from '../../components/modals/Medicos/ModalMedico';
import ModalOverlay from '../../components/modals/ModalOverlay';
import { useState } from 'react';
import BtnContainer from '../../components/buttons/BtnContainer';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import MainLoader from '../../components/Loaders/MainLoader';
import { UseFetchMedicos } from '../../hooks/UseMedicos';
import { toast, Toaster } from 'react-hot-toast';
import { useAddMedico } from '../../hooks/UseMedicos';

const Medicos = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addMedicModalShowed, setAddMedicModalShowed] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [ruc, setRuc] = useState('');
  const [folio, setFolio] = useState('');
  const [senescyt, setSenescyt] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const cleanValues = () => {
    setNombres('');
    setApellidos('');
    setRuc('');
    setFolio('');
    setSenescyt('');
    setEspecialidad('');
  };

  const { data: medicos, isLoading, error } = UseFetchMedicos();

  const queryClient = useQueryClient();

  const addMedico = useMutation(useAddMedico, {
    onSuccess: () => {
      toast.success('Añadido correctamente!');
      queryClient.invalidateQueries('medicos');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombres,
      apellidos,
      ruc,
      folio,
      senescyt,
      especialidad,
    };

    addMedico.mutate(data);
    cleanValues();
    setAddMedicModalShowed(false);
  };

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
      <div>
        <Toaster />
      </div>
      <div className="flex items-center justify-start mt-12 w-[95%]  mx-auto flex-col ">
        <MedicosTable
          searchInput={searchInput}
          setAddMedicModalShowed={setAddMedicModalShowed}
          data={medicos}
        />
      </div>
      <ModalOverlay
        modalShowed={addMedicModalShowed}
        setModalShowed={setAddMedicModalShowed}
      />
      <ModalMedico
        modalShowed={addMedicModalShowed}
        setModalShowed={setAddMedicModalShowed}
        nombres={nombres}
        apellidos={apellidos}
        ruc={ruc}
        folio={folio}
        senescyt={senescyt}
        especialidad={especialidad}
        setNombres={setNombres}
        setApellidos={setApellidos}
        setRuc={setRuc}
        setFolio={setFolio}
        setSenescyt={setSenescyt}
        setEspecialidad={setEspecialidad}
        handleSubmit={handleSubmit}
      />
      <BtnContainer setShowModal={setAddMedicModalShowed} />
    </HomeLayout>
  );
};

export default Medicos;
