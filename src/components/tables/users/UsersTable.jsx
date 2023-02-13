import React from 'react';
import { UseFetchUsers } from '../../../hooks/UseUsers';
import { useInputValue } from '../../../store/VitalStore';
import MainLoader from '../../Loaders/MainLoader';
import Table from '../Table';
import TableContainer from '../TableContainer';
import UserItem from './UserItem';

export default function UsersTable() {
  const { isLoading, error, data: usuarios } = UseFetchUsers();
  const { inputValue } = useInputValue((state) => state);

  const headers = [
    'Nombre de usuario',
    'Nombres',
    'Apellidos',
    'Email',
    'Cargo',
    'Rol',
    '',
  ];

  if (error) return 'An error occurred: ' + error.message;

  return (
    <TableContainer headers={headers}>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table headers={headers}>
          {usuarios
            .filter((usuario) => {
              return (
                usuario.username
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                usuario.names
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                usuario.lastnames
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                usuario.email
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                usuario.cargo
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                usuario.rol.toLowerCase().includes(inputValue.toLowerCase())
              );
            })
            .map((usuario) => (
              <UserItem key={usuario.id} usuario={usuario} />
            ))}
        </Table>
      )}
    </TableContainer>
  );
}
