import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import BtnContentSm from '../../buttons/BtnContentSm';
import TableContainer from '../TableContainer';

const Medicos = ({ searchInput, data }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Cédula / RUC</th>
          <th>№ Folio</th>
          <th>Registro Senescyt</th>
          <th>Especialidad</th>
          <th className="sticky  right-0">Registro Acess</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((medico) => {
            return (
              medico.nombres
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              medico.apellidos
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              medico.especialidad
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            );
          })
          .map((medico) => (
            <tr className="hover" key={medico.id}>
              <td>{medico.nombres}</td>
              <td>{medico.apellidos}</td>
              <td>{medico.ruc}</td>
              <td>{medico.folio}</td>
              <td>{medico.senescyt}</td>
              <td>{medico.especialidad}</td>
              <th className="sticky flex justify-center right-0">
                <BtnContentSm>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </BtnContentSm>
              </th>
            </tr>
          ))}
      </tbody>
    </TableContainer>
  );
};

export default Medicos;
