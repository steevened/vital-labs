import React from 'react';
import { UseFetchPacientes } from '../../../hooks/UsePacientes';
import { useInputValue } from '../../../store/VitalStore';
import MainLoader from '../../Loaders/MainLoader';
import Table from '../Table';

import TableContainer from '../TableContainer';
import PacienteItem from './PacienteItem';

export default function PacientesTable() {
  const { isLoading, error, data: pacientes } = UseFetchPacientes();
  const { inputValue } = useInputValue((state) => state);

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

  if (error) return 'An error occurred' + error.message;

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
                  .includes(inputValue.toLowerCase()) ||
                paciente.apellidos
                  .toLowerCase()
                  .includes(inputValue.toLowerCase())
              );
            })
            .map((paciente) => (
              <PacienteItem key={paciente.id} paciente={paciente} />
            ))}
        </Table>
      )}
    </TableContainer>
  );
}
