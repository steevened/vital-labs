import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import BtnContainer from '../../components/buttons/BtnContainer';
import ModalOverlay from '../../components/modals/ModalOverlay';
import ModalPacientes from '../../components/modals/Pacientes/ModalPacientes';
import PacientesTable from '../../components/tables/pacientes/PacientesTable';
import HomeLayout from '../../layouts/HomeLayout';
import { Toaster, toast } from 'react-hot-toast';
import { useAddPaciente } from '../../hooks/UsePacientes';
import useModalStore from '../../store/VitalStore';
import TableDimensions from '../../components/tables/TableDimensions';

const Pacientes = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    cedula: '',
    nacimiento: '',
    civil: '',
    sexo: '',
    direccion: '',
  });

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
    closeModal();
  };

  return (
    <HomeLayout>
      <div>
        <Toaster />
      </div>
      <TableDimensions>
        <PacientesTable />
      </TableDimensions>

      <ModalOverlay />
      <ModalPacientes
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <BtnContainer />
    </HomeLayout>
  );
};

export default Pacientes;
