import React from "react";

export interface InsProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  cite?: string; 
}

const Ins = React.forwardRef<HTMLModElement, InsProps>((props, ref) => {
  const { inlineStyle, classes, children, cite  } = props;
  //
  return (
    <ins
      cite={cite} 
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    >
      {children}
    </ins>
  );
});

export default Ins;
