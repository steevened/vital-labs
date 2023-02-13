import HomeLayout from '../../layouts/HomeLayout';
import MedicosTable from '../../components/tables/medicos/Medicos';
import ModalMedico from '../../components/modals/Medicos/ModalMedico';
import ModalOverlay from '../../components/modals/ModalOverlay';
import { useState } from 'react';
import BtnContainer from '../../components/buttons/BtnContainer';
import { useMutation, useQueryClient } from 'react-query';
import { toast, Toaster } from 'react-hot-toast';
import { useAddMedico } from '../../hooks/UseMedicos';

const Medicos = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addMedicModalShowed, setAddMedicModalShowed] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedico.mutate(formData);
    cleanValues();
    setAddMedicModalShowed(false);
  };

  // console.log(formData);

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
        />
      </div>
      <ModalOverlay
        modalShowed={addMedicModalShowed}
        setModalShowed={setAddMedicModalShowed}
      />
      <ModalMedico
        modalShowed={addMedicModalShowed}
        setModalShowed={setAddMedicModalShowed}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <BtnContainer setShowModal={setAddMedicModalShowed} />
    </HomeLayout>
  );
};

export default Medicos;
