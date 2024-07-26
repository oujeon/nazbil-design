import React from "react";

export interface InputButtonProps {
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputButtonProps> = (props) => {
  const { onBlur, onFocus, onChange } = props;
  //
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    (onBlur as React.FocusEventHandler<HTMLInputElement>)?.(e);
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    (onFocus as React.FocusEventHandler<HTMLInputElement>)?.(e);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    (onChange as React.ChangeEventHandler<HTMLInputElement>)?.(e);
  };
  //
  return (
    <input
      type="button"
      value="Basic"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
    />
  );
};

export default Input;
