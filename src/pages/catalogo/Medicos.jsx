import HomeLayout from '../../layouts/HomeLayout';
import MedicosTable from '../../components/tables/medicos/Medicos';
import ModalMedico from '../../components/modals/Medicos/ModalMedico';
import ModalOverlay from '../../components/modals/ModalOverlay';
import { useState } from 'react';
import BtnContainer from '../../components/buttons/BtnContainer';
import { useMutation, useQueryClient } from 'react-query';
import { toast, Toaster } from 'react-hot-toast';
import { useAddMedico } from '../../hooks/UseMedicos';
import useModalStore from '../../store/ModalStore';

const Medicos = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    ruc: '',
    folio: '',
    senescyt: '',
    especialidad: '',
  });
  const [searchInput, setSearchInput] = useState('');

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
      toast.success('Añadido correctamente!');
      queryClient.invalidateQueries('medicos');
    },
  });

  const closeModal = useModalStore((state) => state.closeModal);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedico.mutate(formData);
    cleanValues();
    closeModal();
  };

  // console.log(formData);

  return (
    <HomeLayout setSearchInput={setSearchInput}>
      <div>
        <Toaster />
      </div>
      <div className="flex items-center justify-start mt-12 w-[95%]  mx-auto flex-col ">
        <MedicosTable searchInput={searchInput} />
      </div>
      <ModalOverlay />
      <ModalMedico
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <BtnContainer />
    </HomeLayout>
  );
};

export default Medicos;
