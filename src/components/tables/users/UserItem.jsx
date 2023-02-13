import React from 'react';
import BtnTable from '../../buttons/BtnTable';
import TableDesc from '../TableDesc';

export default function UserItem({ usuario }) {
  return (
    <tr className="border hover:bg-sky-100 group">
      <TableDesc>{usuario.username}</TableDesc>
      <TableDesc>{usuario.names}</TableDesc>
      <TableDesc>{usuario.lastnames}</TableDesc>
      <TableDesc>{usuario.email}</TableDesc>
      <TableDesc>{usuario.cargo}</TableDesc>
      <TableDesc>{usuario.rol}</TableDesc>
      <BtnTable />
    </tr>
  );
}
