import React from "react";
import {
  Clients,
  AddClientModal,
  Projects,
  AddProjectModal,
} from "../components";

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </div>
  );
};

export default Home;
