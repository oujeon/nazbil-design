import React from "react";

export interface DivProps {  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;}

const Div = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <div  className={classes} ref={ref} style={{ ...inlineStyle }}>
          {children}
    </div>
  );
});

export default Div;
