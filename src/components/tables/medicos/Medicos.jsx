import React, { useEffect } from 'react';
import db from '../../../../db.json';

const Medicos = ({ collapsed }) => {
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
              <td>{medico.access}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicos;
