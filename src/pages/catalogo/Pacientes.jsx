import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import BtnContainer from '../../components/buttons/BtnContainer';
import ModalOverlay from '../../components/modals/ModalOverlay';
import ModalPacientes from '../../components/modals/Pacientes/ModalPacientes';
import PacientesTable from '../../components/tables/pacientes/PacientesTable';
import HomeLayout from '../../layouts/HomeLayout';
import { Toaster, toast } from 'react-hot-toast';
import { useAddPaciente } from '../../hooks/UsePacientes';

const Pacientes = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addPersonModalShowed, setAddPersonModalShowed] = useState(false);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    cedula: '',
    nacimiento: '',
    civil: '',
    sexo: '',
    direccion: '',
  });
  const [searchInput, setSearchInput] = useState('');

  const queryClient = useQueryClient();

  const addPacienteMutation = useMutation(useAddPaciente, {
    onSettled: () => {
      toast.success('Añadido correctamente!');
      queryClient.invalidateQueries('pacientes');
    },
  });

  const cleanValues = () => {
    setFormData({
      nombres: '',
      apellidos: '',
      cedula: '',
      nacimiento: '',
      civil: '',
      sexo: '',
      direccion: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPacienteMutation.mutate(formData);
    cleanValues();
    setAddPersonModalShowed(false);
  };

  console.log(formData);

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
      setShowModal={setAddPersonModalShowed}
    >
      <div>
        <Toaster />
      </div>
      <div className="flex items-center justify-start mt-12 w-[95%] mx-auto flex-col">
        <PacientesTable
          searchInput={searchInput}
          setAddPersonModalShowed={setAddPersonModalShowed}
        />
      </div>
      <ModalOverlay
        modalShowed={addPersonModalShowed}
        setModalShowed={setAddPersonModalShowed}
      />
      <ModalPacientes
        modalShowed={addPersonModalShowed}
        setShowModal={setAddPersonModalShowed}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <BtnContainer setShowModal={setAddPersonModalShowed} />
    </HomeLayout>
  );
};

export default Pacientes;
