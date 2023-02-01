import React, { useEffect } from 'react';
import db from '../../../../db.json';

import BtnContentSm from '../../buttons/BtnContentSm';

const Medicos = () => {
  useEffect(() => {
    console.log(db.medicos);
  }, []);
  return (
    <div className="overflow-x-auto h-3/4 shadow-lg w-full">
      <table className="table  w-full">
        <thead>
          <tr>
            <th></th>
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
              <th>{i}</th>
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
