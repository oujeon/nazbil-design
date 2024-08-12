import React from "react";

export interface InputResetProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputReset = React.forwardRef<HTMLInputElement, InputResetProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    //
    return (
      <input
        type="reset"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputReset;
