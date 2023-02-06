import React from 'react';
import TableContainer from '../TableContainer';
import BtnContent from '../../buttons/BtnContent';
import db from '../../../../db.json';

export default function UsersTable({ setShowModal, searchInput }) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th></th>
          <th>Nombre de usuario</th>
          <th>Nombres</th>
          <th>Email</th>
          <th>Cargo</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {db.usuarios
          .filter((usuario) => {
            return usuario.username
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((usuario, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
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
