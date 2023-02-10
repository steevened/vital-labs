import React from 'react';

import TableContainer from '../TableContainer';

export default function PacientesTable({ searchInput, data }) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>№ cédula</th>
          <th>№ historial</th>
          <th>estado civil</th>
          <th>sexo</th>
          <th>nacimiento</th>
          <th>dirección</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((paciente) => {
            return (
              paciente.nombres
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              paciente.apellidos
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            );
          })
          .map((paciente, i) => (
            <tr className="hover" key={i}>
              <td>{paciente.nombres}</td>
              <td>{paciente.apellidos}</td>
              <td>{paciente.cedula}</td>
              <td>{paciente.id}</td>
              <td>{paciente.civil}</td>
              <td>{paciente.sexo}</td>
              <td>{paciente.nacimiento}</td>
              <td>{paciente.direccion}</td>
            </tr>
          ))}
      </tbody>
    </TableContainer>
  );
}
