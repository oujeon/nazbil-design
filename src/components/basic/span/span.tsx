import React from "react";

export interface SpanProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Span = React.forwardRef<HTMLElement, SpanProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <span className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </span>
  );
});

export default Span;
