import React from "react";

export interface SProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const S = React.forwardRef<HTMLElement, SProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <s className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </s>
  );
});

export default S;
