import React from "react";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick } = props;
  //
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e);
  };
  //
  return (
    <button className="ant-btn ant-btn-primary" onClick={handleClick}>
      Primary Button
    </button>
  );
};

export default Button;
