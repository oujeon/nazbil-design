import Button from "components/button";
import React, { useEffect, useState } from "react";

const Workspace: React.FC = () => {
  const [subScreen, setSubScreen] = useState(<>Empty</>);

  useEffect(() => {}, []);

  //
  function onMemuId(menuId: string) { 

    if (menuId === "Button") {
      //
      setSubScreen(<Button />);
    }
  }

  return (
    <div id="wrapper">
      <div id="wrapper_body">
        <header id="header">
          <div className="head_left">
            <h1>Nazbil Design</h1>
          </div>
        </header>
        <div id="container">
          <div id="left_container">
            <div className="menu_box">
              <button
                onClick={() => {
                  onMemuId("Button");
                }}
              >
                <span> - 버튼</span>
              </button>
            </div>
            <div className="menu_box"></div>
            <div className="menu_box"></div>
            <div className="menu_box"></div>
            <div className="menu_box"></div>
            <div className="menu_box"></div>
            <div className="menu_box"></div>
            <div className="menu_box"></div>
          </div>
          <div id="right_container">{subScreen}</div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
