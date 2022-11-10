import React from "react";
import { useQuery } from "@apollo/client";
import { ClientRow, Loader } from "./";
import { GET_CLIENTS } from "../queries/clientQueries";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Loader />;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="table-responsive">
      {!loading && !error && (
        <table className="table table-hover mt-3 ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
