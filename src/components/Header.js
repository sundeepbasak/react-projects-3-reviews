import React from "react";

const Header = ({ projectName }) => {
  return (
    <div className="text-white text-3xl font-bold my-4">{projectName?projectName:'Project Name'}</div>
  );
};

export default Header;
