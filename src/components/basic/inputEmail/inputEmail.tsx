import React from "react";

export interface InputEmailProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;

    //
    return (
      <input
        type="email"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputEmail;
