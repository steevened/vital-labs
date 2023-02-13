import React from 'react';
import BtnTable from '../../buttons/BtnTable';
import TableDesc from '../TableDesc';

function PacienteItem({ paciente }) {
  return (
    <tr className="border hover:bg-sky-100 group">
      <TableDesc>{paciente.nombres}</TableDesc>
      <TableDesc>{paciente.apellidos}</TableDesc>
      <TableDesc>{paciente.cedula}</TableDesc>
      <TableDesc>{paciente.id}</TableDesc>
      <TableDesc>{paciente.civil}</TableDesc>
      <TableDesc>{paciente.sexo}</TableDesc>
      <TableDesc>{paciente.nacimiento}</TableDesc>
      <TableDesc>{paciente.direccion}</TableDesc>
      <BtnTable />
    </tr>
  );
}

export default PacienteItem;
