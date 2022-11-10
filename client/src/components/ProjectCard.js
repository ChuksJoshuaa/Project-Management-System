import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6 shadow">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items center">
            <h5 className="card-title"> {project.name}</h5>

            <Link to={`projects/${project.id}`} className="btn btn-light">
              <button className="btn btn-secondary btn-sm">View</button>
            </Link>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
