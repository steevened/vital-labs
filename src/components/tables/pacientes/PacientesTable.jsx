import React from 'react';
import { UseFetchPacientes } from '../../../hooks/UsePacientes';
import MainLoader from '../../Loaders/MainLoader';
import Table from '../Table';

import TableContainer from '../TableContainer';
import PacienteItem from './PacienteItem';

export default function PacientesTable({ searchInput }) {
  const { isLoading, error, data: pacientes } = UseFetchPacientes();

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
    '',
  ];

  return (
    <TableContainer>
      {isLoading ? (
        <MainLoader />
      ) : (
        <Table headers={headers}>
          {pacientes
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
            .map((paciente) => (
              <PacienteItem paciente={paciente} />
            ))}
        </Table>
      )}
    </TableContainer>
  );
}
