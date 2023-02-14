import React from 'react';
import BtnActions from './BtnActions';

export default function BtnTable({ id }) {
  return (
    <td className="sticky flex justify-between gap-3 right-0 py-2 px-3 bg-base-200 whitespace-nowrap group-hover:bg-sky-100">
      <BtnActions action="view" id={id} />
    </td>
  );
}
