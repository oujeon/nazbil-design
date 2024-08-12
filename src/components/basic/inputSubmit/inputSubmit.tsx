import React from "react";

export interface InputSubmitProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputSubmit = React.forwardRef<HTMLInputElement, InputSubmitProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    return (
      <input
        type="submit"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputSubmit;
