import React from "react";

export interface InputRadioProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    return (
      <input
        type="radio"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputRadio;
