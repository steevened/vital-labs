import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import BtnContainer from '../../components/buttons/BtnContainer';
import MainLoader from '../../components/Loaders/MainLoader';
import ModalOverlay from '../../components/modals/ModalOverlay';
import UsuariosModal from '../../components/modals/Usuarios/UsuariosModal';
import UsersTable from '../../components/tables/users/UsersTable';
import HomeLayout from '../../layouts/HomeLayout';
import { toast, Toaster } from 'react-hot-toast';
import { useAddUser } from '../../hooks/UseUsers';
import useModalStore from '../../store/VitalStore';
import TableDimensions from '../../components/tables/TableDimensions';

const Usuarios = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    username: '',
    names: '',
    lastnames: '',
    email: '',
    cargo: '',
    rol: '',
  });

  const addUser = useMutation(useAddUser, {
    onSuccess: () => {
      toast.success('Añadido correctamente!');
      queryClient.invalidateQueries('usuarios');
    },
  });

  const cleanValues = () => {
    setFormData({
      username: '',
      names: '',
      lastnames: '',
      email: '',
      cargo: '',
      rol: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cleanValues();
    addUser.mutate(formData);
    closeModal();
  };

  return (
    <HomeLayout>
      <div>
        <Toaster />
      </div>
      <TableDimensions>
        <UsersTable />
      </TableDimensions>
      <ModalOverlay />
      <UsuariosModal
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <BtnContainer />
    </HomeLayout>
  );
};

export default Usuarios;
