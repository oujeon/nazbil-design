import Application from "workspace/application";
import Basic from "workspace/basic";

import React from "react";

const Workspace: React.FC = () => {
  return (
    <div id="wrapper">
      <div id="wrapper_body">
        <header id="header">
          <div className="head_left">
            <h1>Nazbil Design</h1>
          </div>
        </header>
        <div id="container">
          <Application />
          <Basic />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
