import React from "react";

export interface InputHiddenProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputHidden = React.forwardRef<HTMLInputElement, InputHiddenProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    return (
      <input
        type="hidden"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);
export default InputHidden;
