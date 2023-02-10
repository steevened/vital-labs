import React from 'react';

function Table({ headers, children }) {
  return (
    <table className="table-auto  w-full">
      <thead className="bg-base-100">
        <tr>
          {headers.map((header) => (
            <th
              className={`py-3 whitespace-nowrap ${
                header === '' ? 'sticky right-0 bg-base-100' : ''
              }`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-base-200 text-center">{children}</tbody>
    </table>
  );
}

export default Table;
