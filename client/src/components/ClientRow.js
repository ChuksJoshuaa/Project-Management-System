import React from "react";
import { FaTrash } from "react-icons/fa";

const ClientRow = ({ client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>

      <button className="btn btn-danger btn-sm">
        <FaTrash />
      </button>
    </tr>
  );
};

export default ClientRow;
