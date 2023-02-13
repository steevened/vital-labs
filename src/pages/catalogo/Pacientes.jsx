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
  const [searchInput, setSearchInput] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [cedula, setCedula] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [civil, setCivil] = useState('');
  const [sexo, setSexo] = useState('');
  const [direccion, setDireccion] = useState('');

  const queryClient = useQueryClient();

  const addPacienteMutation = useMutation(useAddPaciente, {
    onSettled: () => {
      toast.success('Añadido correctamente!');
      queryClient.invalidateQueries('pacientes');
    },
  });

  const cleanValues = () => {
    setNombres('');
    setApellidos('');
    setCedula('');
    setNacimiento('');
    setCivil('');
    setSexo('');
    setDireccion('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombres,
      apellidos,
      cedula,
      nacimiento,
      civil,
      sexo,
      direccion,
    };
    addPacienteMutation.mutate(data);
    cleanValues();
    setAddPersonModalShowed(false);
  };

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
        nombres={nombres}
        setNombres={setNombres}
        apellidos={apellidos}
        setApellidos={setApellidos}
        cedula={cedula}
        setCedula={setCedula}
        nacimiento={nacimiento}
        setNacimiento={setNacimiento}
        civil={civil}
        setCivil={setCivil}
        sexo={sexo}
        setSexo={setSexo}
        direccion={direccion}
        setDireccion={setDireccion}
        handleSubmit={handleSubmit}
      />
      <BtnContainer setShowModal={setAddPersonModalShowed} />
    </HomeLayout>
  );
};

export default Pacientes;
