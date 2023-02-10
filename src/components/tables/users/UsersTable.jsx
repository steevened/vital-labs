import React from 'react';
import TableContainer from '../TableContainer';
import BtnContent from '../../buttons/BtnContent';
import db from '../../../../db.json';

export default function UsersTable({ searchInput, data }) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Nombre de usuario</th>
          <th>Nombres</th>
          <th>Email</th>
          <th>Cargo</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((usuario) => {
            return usuario.username
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((usuario, i) => (
            <tr className="hover" key={i}>
              <td>{usuario.username}</td>
              <td>{usuario.names}</td>
              <td>{usuario.email}</td>
              <td>{usuario.cargo}</td>
              <td>{usuario.rol}</td>
            </tr>
          ))}
      </tbody>
    </TableContainer>
  );
}
