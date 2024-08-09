import React from "react";

export interface PProps {  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;}

const P = React.forwardRef<HTMLParagraphElement, PProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return <p className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}</p>;
});

export default P;
