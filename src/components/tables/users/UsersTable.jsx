import React from 'react';
import { UseFetchUsers } from '../../../hooks/UseUsers';
import MainLoader from '../../Loaders/MainLoader';
import TableContainer from '../TableContainer';

export default function UsersTable({ searchInput }) {
  const { isLoading, error, data } = UseFetchUsers();

  if (error) return 'An error occurred: ' + error.message;

  const headers = [
    'Nombre de usuario',
    'Nombres',
    'Apellidos',
    'Email',
    'Cargo',
    'Rol',
  ];

  return (
    <TableContainer headers={headers}>
      {isLoading ? (
        <MainLoader />
      ) : (
        <tbody>
          {data
            .filter((usuario) => {
              return usuario.username
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            })
            .map((usuario, i) => (
              <tr key={usuario.id}>
                <td>{usuario.username}</td>
                <td>{usuario.names}</td>
                <td>{usuario.lastnames}</td>
                <td>{usuario.email}</td>
                <td>{usuario.cargo}</td>
                <td>{usuario.rol}</td>
              </tr>
            ))}
        </tbody>
      )}
    </TableContainer>
  );
}
