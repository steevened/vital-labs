import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import BtnContainer from '../../components/buttons/BtnContainer';
import MainLoader from '../../components/Loaders/MainLoader';
import ModalOverlay from '../../components/modals/ModalOverlay';
import UsuariosModal from '../../components/modals/Usuarios/UsuariosModal';
import UsersTable from '../../components/tables/users/UsersTable';
import HomeLayout from '../../layouts/HomeLayout';
import { toast, Toaster } from 'react-hot-toast';
import { useAddUser, UseFetchUsers } from '../../hooks/UseUsers';

const Usuarios = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addUserModalShowed, setAddUserModalShowed] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    names: '',
    lastnames: '',
    email: '',
    cargo: '',
    rol: '',
  });

  const queryClient = useQueryClient();

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
    setAddUserModalShowed(false);
  };

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
      setShowModal={setAddUserModalShowed}
    >
      <div>
        <Toaster />
      </div>
      <div className="flex items-start justify-start mt-12 w-[95%] mx-auto flex-col">
        <UsersTable
          searchInput={searchInput}
          setShowModal={setAddUserModalShowed}
        />
      </div>
      <ModalOverlay
        modalShowed={addUserModalShowed}
        setModalShowed={setAddUserModalShowed}
      />
      <UsuariosModal
        modalShowed={addUserModalShowed}
        setModalShowed={setAddUserModalShowed}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <BtnContainer setShowModal={setAddUserModalShowed} />
    </HomeLayout>
  );
};

export default Usuarios;
