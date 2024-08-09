import React from "react";

export interface SubProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Sub = React.forwardRef<HTMLElement, SubProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <sub className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </sub>
  );
});

export default Sub;
