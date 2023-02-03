import React, { useEffect } from 'react';
import db from '../../../../db.json';
import BtnContent from '../../buttons/BtnContent';

import BtnContentSm from '../../buttons/BtnContentSm';

const Medicos = ({ setAddMedicModalShowed }) => {
  useEffect(() => {
    console.log(db.medicos);
  }, []);
  return (
    <div className="overflow-x-auto h-[90%] shadow-lg w-full">
      <table className="table  w-full">
        <thead>
          <tr>
            <th>
              <div
                onClick={() => setAddMedicModalShowed(true)}
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
            <th>RUC</th>
            <th>№ Folio</th>
            <th>Registro Senescyt</th>
            <th>Especialidad</th>
            <th>Registro de Acess</th>
          </tr>
        </thead>
        <tbody>
          {db.medicos.map((medico, i) => (
            <tr>
              <th className="relative">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {i}
                </p>
              </th>
              <td>{medico.nombres}</td>
              <td>{medico.apellidos}</td>
              <td>{medico.RUC}</td>
              <td>{medico.folio}</td>
              <td>{medico.senescyt}</td>
              <td>{medico.especialidad}</td>
              <td className="flex items-center justify-center">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicos;
