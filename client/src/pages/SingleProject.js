import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Loader,
  ClientInfo,
  DeleteProjectButton,
  EditProjectForm,
} from "../components";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";

const SingleProject = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <p className="text-danger font-weight-medium fs-5">
        Something went wrong
      </p>
    );
  return (
    <div className="mb-2 home">
      {!loading && !error && (
        <div className="single-head card">
          <Link to="/" className="btn btn-light btn-sm d-inline ms-auto">
            Back
          </Link>
          <h1 className="mt-3 font-weight-bold text-capitalize">
            {data.project.name}
          </h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">
            Project Status:
            <span className="lead"> {data.project.status}</span>
          </h5>

          <ClientInfo client={data.project.clientId} />

          <div className="d-flex gap-3 mb-4">
            <EditProjectForm project={data.project} />
            <DeleteProjectButton projectId={data.project.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
