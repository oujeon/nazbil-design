import React from "react";

export interface InputTelProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputTel = React.forwardRef<HTMLInputElement, InputTelProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    return (
      <input
        type="tel"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputTel;
