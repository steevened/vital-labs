import React from 'react';
import BtnContent from '../../buttons/BtnContent';
import BtnContentSm from '../../buttons/BtnContentSm';
import db from '../../../../db.json';

export default function PacientesTable({
  setAddPersonModalShowed,
  searchInput,
}) {
  return (
    <div className="overflow-x-auto h-[90%] shadow-lg w-full">
      <table className="table  w-full">
        <thead>
          <tr>
            <th>
              <div
                onClick={() => setAddPersonModalShowed(true)}
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
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>№ cédula</th>
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
                <th className="relative">
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {i + 1}
                  </p>
                </th>
                <td>{paciente.nombres}</td>
                <td>{paciente.apellidos}</td>
                <td>{paciente.cedula}</td>
                <td>{paciente.civil}</td>
                <td>{paciente.sexo}</td>
                <td>{paciente.nacimiento}</td>
                <td>{paciente.direccion}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
