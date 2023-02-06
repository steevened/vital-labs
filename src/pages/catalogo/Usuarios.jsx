import React, { useState } from 'react';
import BtnContainer from '../../components/buttons/BtnContainer';
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

  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      setSearchInput={setSearchInput}
      setShowModal={setAddUserModalShowed}
    >
      <div className="flex items-center justify-center w-[95%] mx-auto flex-col">
        <UsersTable
          searchInput={searchInput}
          setShowModal={setAddUserModalShowed}
        />
      </div>
      <ModalOverlay
        modalShowed={addUserModalShowed}
        setModalShowed={setAddUserModalShowed}
      />
      <UsuariosModal modalShowed={addUserModalShowed} />
      <BtnContainer setShowModal={setAddUserModalShowed} />
    </HomeLayout>
  );
};

export default Usuarios;
