import React from "react";

export interface InputRangeProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputRange = React.forwardRef<HTMLInputElement, InputRangeProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    //
    return (
      <input
        type="button"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputRange;
