import React from "react";

export interface MarkProps {    classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Mark  = React.forwardRef<HTMLElement, MarkProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
 
  //
  return (
    <mark className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children} </mark>
  );
});

export default Mark;
