import React from 'react';
import TableContainer from '../TableContainer';
import BtnContent from '../../buttons/BtnContent';
import db from '../../../../db.json';

export default function UsersTable({ setShowModal, searchInput }) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>
            <div
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center "
            >
              <BtnContent>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </BtnContent>
            </div>
          </th>
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
              <th className="relative">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {i + 1}
                </p>
              </th>
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
