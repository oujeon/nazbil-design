import React from "react";

export interface InputDateProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputDate = React.forwardRef<HTMLInputElement, InputDateProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    return (
      <input
        type="date"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputDate;
