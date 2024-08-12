import React from "react";

export interface InputNumberProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;

    //
    return (
      <input
        type="number"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);
export default InputNumber;
