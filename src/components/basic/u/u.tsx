import React from "react";

export interface UProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const U = React.forwardRef<HTMLElement, UProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <u className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </u>
  );
});

export default U;
