import React from 'react';
import BtnTable from '../../buttons/BtnTable';
import TableDesc from '../TableDesc';

function MedicoItem({ medico }) {
  console.log(medico);
  return (
    <tr className="border hover:bg-sky-100 group" key={medico.id}>
      <TableDesc>{medico.nombres}</TableDesc>
      <TableDesc>{medico.apellidos}</TableDesc>
      <TableDesc>{medico.ruc}</TableDesc>
      <TableDesc>{medico.folio}</TableDesc>
      <TableDesc>{medico.senescyt}</TableDesc>
      <TableDesc>{medico.especialidad}</TableDesc>
      <TableDesc>{medico.access}</TableDesc>
      <BtnTable />
    </tr>
  );
}

export default MedicoItem;
