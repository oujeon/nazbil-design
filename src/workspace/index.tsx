import { A } from "components/basic";
import React, { useEffect, useState } from "react";

const Workspace: React.FC = () => {
  const [subScreen, setSubScreen] = useState(<>Empty</>);

  useEffect(() => {}, []);
  //
  const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(e.target.value);
  };
  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  //
  function onMemuId(menuId: string) {
    if (menuId === "Button") {
      //
      <A />;
    }
    if (menuId === "Radio") {
      //
      setSubScreen(<></>);
    }
    if (menuId === "Select") {
      //
      setSubScreen(<></>);
    }
    if (menuId === "Calendar") {
      //
      setSubScreen(<></>);
    }

    if (menuId === "InputButton") {
      //
    }
    if (menuId === "InputText") {
      //
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
              <h1>Application</h1>
            </div>
            <div className="menu_box">
              <h1>Basic</h1>
            </div>
          </div>
          <div id="right_container">{subScreen}</div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
