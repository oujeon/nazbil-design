import React from "react";

export interface InputDatetimeLocalProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputDatetimeLocal = React.forwardRef<
  HTMLInputElement,
  InputDatetimeLocalProps
>((props, ref) => {
  const { inlineStyle, classes } = props;
  //
  return (
    <input
      type="datetime-local"
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    />
  );
});

export default InputDatetimeLocal;
