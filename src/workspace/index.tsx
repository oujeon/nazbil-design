import {
  Button,
  Calendar,
  InputButton,
  InputText,
  Radio,
  Select,
} from "components";
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

    if (menuId === "InputButton") {
      //
      setSubScreen(<InputButton onChange={onInputChange} />);
    }
    if (menuId === "InputText") {
      //
      setSubScreen(<InputText onChange={onInputChange} />);
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
            <div className="menu_box">
              <button
                onClick={() => {
                  onMemuId("InputButton");
                }}
              >
                <span> - InputButton -</span>
              </button>
            </div>
            <div className="menu_box">
              <button
                onClick={() => {
                  onMemuId("InputText");
                }}
              >
                <span> - InputText -</span>
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
