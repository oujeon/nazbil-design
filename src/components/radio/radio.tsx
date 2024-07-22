import React, { useState } from "react";

export interface InputProps {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<InputProps> = (props) => {
  const { onChange, text } = props;

  const [addClassName, setAddClassName] = useState(false);

  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddClassName(!addClassName);
    (onChange as React.ChangeEventHandler<HTMLInputElement>)?.(e);
  };
  //
  return (
    <label
      className={
        addClassName
          ? "ant-radio-wrapper ant-radio-wrapper-checked ant-radio-css-var"
          : "ant-radio-wrapper ant-radio-css-var "
      }
    >
      <span
        className={
          addClassName
            ? "ant-radio ant-radio-checked ant-wave-target"
            : "ant-radio ant-wave-target"
        }
      >
        <input
          className="ant-radio-input"
          type="radio"
          onChange={handleChange}
        />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{text}</span>
    </label>
  );
};

export default Radio;
