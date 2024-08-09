import React from "react";

export interface SupProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Sup = React.forwardRef<HTMLElement, SupProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <sup className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </sup>
  );
});

export default Sup;
