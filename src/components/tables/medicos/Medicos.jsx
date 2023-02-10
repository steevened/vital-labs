import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import BtnActions from '../../buttons/BtnActions';
import TableContainer from '../TableContainer';

const Medicos = ({ searchInput, data }) => {
  return (
    <TableContainer>
      <thead className="bg-base-100">
        <tr>
          <th className="py-3 whitespace-nowrap">Nombres</th>
          <th className="py-3 whitespace-nowrap">Apellidos</th>
          <th className="py-3 whitespace-nowrap">Cédula / RUC</th>
          <th className="py-3 whitespace-nowrap">№ Folio</th>
          <th className="py-3 whitespace-nowrap">Registro Senescyt</th>
          <th className="py-3 whitespace-nowrap">Especialidad</th>
          <th className="sticky  right-0 bg-base-100 whitespace-nowrap">
            Registro Acess
          </th>
        </tr>
      </thead>
      <tbody className="bg-base-200 text-center">
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
            <tr className="border hover:bg-sky-100 group" key={medico.id}>
              <td className="py-2 px-3 whitespace-nowrap ">{medico.nombres}</td>
              <td className="py-2 px-3 whitespace-nowrap">
                {medico.apellidos}
              </td>
              <td className="py-2 px-3 whitespace-nowrap">{medico.ruc}</td>
              <td className="py-2 px-3 whitespace-nowrap">{medico.folio}</td>
              <td className="py-2 px-3 whitespace-nowrap">{medico.senescyt}</td>
              <td className="py-2 px-3 whitespace-nowrap">
                {medico.especialidad}
              </td>
              <th className="sticky flex justify-between gap-3 right-0 py-2 px-3 bg-base-200 whitespace-nowrap group-hover:bg-sky-100">
                <BtnActions action="view" />
                <BtnActions action="edit" />
                <BtnActions action="delete" />
              </th>
            </tr>
          ))}
      </tbody>
    </TableContainer>
  );
};

export default Medicos;
