import React from 'react';
import { UseFetchPacientes } from '../../../hooks/UsePacientes';
import MainLoader from '../../Loaders/MainLoader';

import TableContainer from '../TableContainer';

export default function PacientesTable({ searchInput }) {
  const { isLoading, error, data } = UseFetchPacientes();

  if (error) return 'An error occurred' + error.message;

  const headers = [
    'Nombres',
    'Apellidos',
    'Cédula / RUC',
    '№ Historial',
    'Estado Civil',
    'Género',
    'Fecha Nacimiento',
    'Dirección',
  ];

  return (
    <TableContainer headers={headers}>
      {isLoading ? (
        <MainLoader />
      ) : (
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
      )}
    </TableContainer>
  );
}
