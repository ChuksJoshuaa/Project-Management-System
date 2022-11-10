import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-5 bg-light">
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Project Management System. </span>
      </h5>
      <h5>All rights reserved</h5>
    </div>
  );
};

export default Footer;
