import React from "react";

export interface InputTextProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputTextProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    //
    return (
      <input
        type="text"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default Input;
