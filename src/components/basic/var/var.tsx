import React from "react";

export interface VarProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Var = React.forwardRef<HTMLElement, VarProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <var className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </var>
  );
});

export default Var;
