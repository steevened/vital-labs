import React, { useState } from 'react';
import BtnTable from '../../buttons/BtnTable';
import TableDesc from '../TableDesc';

function MedicoItem({ medico }) {
  return (
    <tr className="border hover:bg-sky-100 group">
      <TableDesc>{medico.nombres}</TableDesc>
      <TableDesc>{medico.apellidos}</TableDesc>
      <TableDesc>{medico.ruc}</TableDesc>
      <TableDesc>{medico.folio}</TableDesc>
      <TableDesc>{medico.senescyt}</TableDesc>
      <TableDesc>{medico.access}</TableDesc>
      <TableDesc>{medico.especialidad}</TableDesc>
      <BtnTable id={medico.id} />
    </tr>
  );
}

export default MedicoItem;
