import React from "react";

export interface QProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  cite?: string;
}

const Q = React.forwardRef<HTMLQuoteElement, QProps>((props, ref) => {
  const { inlineStyle, classes, children, cite } = props;
  //
  return (
    <q cite={cite} className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </q>
  );
});

export default Q;
