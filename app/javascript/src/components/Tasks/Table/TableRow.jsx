import React from "react";

import PropTypes from "prop-types";

const TableRow = ({ data, showTask, destroyTask }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td
            className="block w-64 px-6 py-4 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            {rowData.title}
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {rowData.user_id}
          </td>
          <td className="px-6 py-4 text-sm font-medium leading-5 text-right cursor-pointer">
            <a
              className="text-bb-purple"
              onClick={() => showTask(rowData.slug)}
            >
              Show
            </a>
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-right cursor-pointer"
          >
            <a
              className="text-red-500
              hover:text-red-700"
              onClick={() => destroyTask(rowData.slug)}
            >
              Delete
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
  showTask: PropTypes.func,
  destroyTask: PropTypes.func
};

export default TableRow;
