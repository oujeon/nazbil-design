import React from "react";

export interface NoscriptProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Noscript = React.forwardRef<HTMLElement, NoscriptProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <noscript className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </noscript>
  );
});

export default Noscript;
