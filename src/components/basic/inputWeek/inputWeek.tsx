import React from "react";

export interface InputProps {
  classes?: string;

  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  type?: string;
}

const Input  = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { inlineStyle, classes, type } = props;
    //
    return (
      <input
        type={type}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default Input;
