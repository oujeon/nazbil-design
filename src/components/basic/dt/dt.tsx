import React from "react";

export interface DtProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Dt = React.forwardRef<HTMLElement, DtProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <dt className={classes} ref={ref} style={{ ...inlineStyle }}> 
      {children}
    </dt>
  );
});

export default Dt;
