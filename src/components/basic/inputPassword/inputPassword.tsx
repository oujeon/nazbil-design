import React from "react";

export interface InputPasswordProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    //
    return (
      <input
        type="password"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputPassword;
