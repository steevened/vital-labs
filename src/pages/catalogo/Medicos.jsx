import HomeLayout from '../../layouts/HomeLayout';
import MedicosTable from '../../components/tables/medicos/Medicos';
import ModalMedico from '../../components/modals/Medicos/ModalMedico';
import ModalOverlay from '../../components/modals/ModalOverlay';
import BtnContainer from '../../components/buttons/BtnContainer';
import { useMutation, useQueryClient } from 'react-query';
import { toast, Toaster } from 'react-hot-toast';
import { useAddMedico, useDeleteMedico } from '../../hooks/UseMedicos';
import useModalStore from '../../store/VitalStore';
import TableDimensions from '../../components/tables/TableDimensions';
import { useState } from 'react';

const Medicos = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    ruc: '',
    folio: '',
    senescyt: '',
    especialidad: '',
  });

  const cleanValues = () => {
    setFormData({
      nombres: '',
      apellidos: '',
      ruc: '',
      folio: '',
      senescyt: '',
      especialidad: '',
    });
  };

  const queryClient = useQueryClient();

  const addMedico = useMutation(useAddMedico, {
    onSuccess: () => {
      queryClient.invalidateQueries('medicos');
    },
  });

  const handleAddMedico = async (medicoData) => {
    try {
      const response = await addMedico.mutateAsync(medicoData);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cleanValues();
    closeModal();
    toast.promise(handleAddMedico(formData), {
      loading: 'Añadiendo...',
      success: 'Añadido correctamente!',
      error: 'Intente Nuevamente!',
    });
  };

  return (
    <HomeLayout>
      <div>
        <Toaster />
      </div>
      <TableDimensions>
        <MedicosTable />
      </TableDimensions>
      <ModalOverlay />
      <ModalMedico
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        cleanValues={cleanValues}
      />
      <BtnContainer />
    </HomeLayout>
  );
};

export default Medicos;
