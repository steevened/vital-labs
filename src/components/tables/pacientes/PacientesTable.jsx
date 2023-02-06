import React from 'react';
import BtnContent from '../../buttons/BtnContent';
import BtnContentSm from '../../buttons/BtnContentSm';
import db from '../../../../db.json';
import TableContainer from '../TableContainer';

export default function PacientesTable({
  setAddPersonModalShowed,
  searchInput,
}) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th></th>
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
        {db.pacientes
          .filter((paciente) => {
            return (
              paciente.nombres
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              paciente.apellidos
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              paciente.cedula.includes(searchInput)
            );
          })
          .map((paciente, i) => (
            <tr key={i}>
              <th></th>
              <td>{paciente.nombres}</td>
              <td>{paciente.apellidos}</td>
              <td>{paciente.cedula}</td>
              <td>{paciente.historial}</td>
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
