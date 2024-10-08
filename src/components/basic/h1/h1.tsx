import React from "react";

export interface H1Props {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <h1 className={classes} ref={ref} style={{ ...inlineStyle }}> 
      {children}
    </h1>
  );
});

export default H1;
