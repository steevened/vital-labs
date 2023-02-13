import React from 'react';
import { UseFetchUsers } from '../../../hooks/UseUsers';
import MainLoader from '../../Loaders/MainLoader';
import Table from '../Table';
import TableContainer from '../TableContainer';
import UserItem from './UserItem';

export default function UsersTable({ searchInput }) {
  const { isLoading, error, data: usuarios } = UseFetchUsers();

  if (error) return 'An error occurred: ' + error.message;

  const headers = [
    'Nombre de usuario',
    'Nombres',
    'Apellidos',
    'Email',
    'Cargo',
    'Rol',
    '',
  ];

  return (
    <TableContainer headers={headers}>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table headers={headers}>
          {usuarios
            .filter((usuario) => {
              return usuario.username
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            })
            .map((usuario) => (
              <UserItem key={usuario.id} usuario={usuario} />
            ))}
        </Table>
      )}
    </TableContainer>
  );
}
