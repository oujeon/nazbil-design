import React from "react";

export interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { type, inlineStyle, classes, children, onClick } = props;
    //
    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      (onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e);
    };
    //
    return (
      <button
        type={type}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

export default Button;
