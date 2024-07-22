import { Button, Calendar, Input, Radio, Select } from "components";
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
      setSubScreen(<Button onClick={addItem} />);
    }
    if (menuId === "Input") {
      //
      setSubScreen(<Input onChange={onInputChange} />);
    }
    if (menuId === "Radio") {
      //
      setSubScreen(
        <>
          <Radio text="라디오 버튼1" onChange={onRadioChange} />
        </>
      );
    }
    if (menuId === "Select") {
      //
      setSubScreen(
        <>
          <Select />
        </>
      );
    }
    if (menuId === "Calendar") {
      //
      setSubScreen(
        <>
          <Calendar />
        </>
      );
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
                <span> - Button -</span>
              </button>
            </div>
            <div className="menu_box">
              <button
                onClick={() => {
                  onMemuId("Input");
                }}
              >
                <span> - Input -</span>
              </button>
            </div>
            <div className="menu_box">
              <button
                onClick={() => {
                  onMemuId("Radio");
                }}
              >
                <span> - Radio -</span>
              </button>
            </div>
            <div className="menu_box">
              <button
                onClick={() => {
                  onMemuId("Select");
                }}
              >
                <span> - Select -</span>
              </button>
            </div>
            <div className="menu_box">
              <button
                onClick={() => {
                  onMemuId("Calendar");
                }}
              >
                <span> - Calendar -</span>
              </button>
            </div>
          </div>
          <div id="right_container">{subScreen}</div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
