import React from 'react';
import BtnActions from '../../buttons/BtnActions';
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
      <td className="sticky flex justify-between gap-3 right-0 py-2 px-3 bg-base-200 whitespace-nowrap group-hover:bg-sky-100">
        <BtnActions action="view" />
      </td>
    </tr>
  );
}

export default MedicoItem;
