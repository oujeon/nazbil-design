import React from "react";

export interface H4Props { 
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const H4 = React.forwardRef<HTMLHeadingElement, H4Props>((props, ref) => {
  const { inlineStyle, classes, children } = props;
 
  //
  return (
    <h4 className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}</h4>
  );
});

export default H4;
