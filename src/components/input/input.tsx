import React from "react";

export interface InputProps {
  onBlur?: (e: React.FocusEvent<HTMLInputElement >) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement >) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement >) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { onBlur, onFocus ,onChange } = props;
  //
  const handleBlur = (e: React.FocusEvent<HTMLInputElement >) => {
    (onBlur as React.FocusEventHandler<HTMLInputElement>)?.(e);
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement >) => {
    (onFocus as React.FocusEventHandler<HTMLInputElement>)?.(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
    (onChange as React.ChangeEventHandler<HTMLInputElement>)?.(e);
  };
  //
  return (
    <input type="text" className="ant-input ant-input-outlined ant-input-css-var"  onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} /> 
  );
};

export default Input;
