import React from "react";

export interface LabelProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  htmlFor?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { inlineStyle, classes, children , htmlFor} = props;
  //
  return (
    <label
      htmlFor={htmlFor}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    >
      {children}
    </label>
  );
});

export default Label;
