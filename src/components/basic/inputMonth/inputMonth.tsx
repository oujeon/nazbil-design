import React from "react";

export interface InputMonthProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputMonth = React.forwardRef<HTMLInputElement, InputMonthProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;

    //
    return (
      <input
        type="month"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputMonth;
