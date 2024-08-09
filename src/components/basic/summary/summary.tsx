import React from "react";

export interface SummaryProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Summary = React.forwardRef<HTMLElement, SummaryProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <summary className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </summary>
  );
});

export default Summary;
