import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BtnContainer from '../../components/buttons/BtnContainer';
import MainLoader from '../../components/Loaders/MainLoader';
import ModalOverlay from '../../components/modals/ModalOverlay';
import UsuariosModal from '../../components/modals/Usuarios/UsuariosModal';
import UsersTable from '../../components/tables/users/UsersTable';
import HomeLayout from '../../layouts/HomeLayout';

const Usuarios = ({
  isToolbarOpen,
  setIsToolbarOpen,
  collapsed,
  setCollapsed,
}) => {
  const [addUserModalShowed, setAddUserModalShowed] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const fetchUsers = async () => {
    const res = await fetch(' http://localhost:3000/usuarios');
    return res.json();
  };

  const { isLoading, error, data } = useQuery('usuarios', fetchUsers);

  if (isLoading) return <MainLoader />;
  if (error) return 'An error occurred: ' + error.message;

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
      setShowModal={setAddUserModalShowed}
    >
      <div className="flex items-start justify-start mt-12 w-[95%] mx-auto flex-col">
        <UsersTable
          searchInput={searchInput}
          setShowModal={setAddUserModalShowed}
          data={data}
        />
      </div>
      <ModalOverlay
        modalShowed={addUserModalShowed}
        setModalShowed={setAddUserModalShowed}
      />
      <UsuariosModal
        modalShowed={addUserModalShowed}
        setModalShowed={setAddUserModalShowed}
      />
      <BtnContainer setShowModal={setAddUserModalShowed} />
    </HomeLayout>
  );
};

export default Usuarios;
