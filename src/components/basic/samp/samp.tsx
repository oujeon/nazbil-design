import React from "react";

export interface SampProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Samp = React.forwardRef<HTMLElement, SampProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <samp className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </samp>
  );
});

export default Samp;
