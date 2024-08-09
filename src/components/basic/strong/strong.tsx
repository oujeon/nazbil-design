import React from "react";

export interface StrongProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Strong = React.forwardRef<HTMLElement, StrongProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <strong className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </strong>
  );
});

export default Strong;
