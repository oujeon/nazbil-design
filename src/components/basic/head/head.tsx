import React from "react";

export interface HeadProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Head = React.forwardRef<HTMLElement, HeadProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <head className={classes} ref={ref} style={{ ...inlineStyle }}> 
      {children}
    </head>
  );
});

export default Head;
