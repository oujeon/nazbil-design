import React from "react";

export interface BProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children: React.ReactNode;
}

const B = React.forwardRef<HTMLElement, BProps>((props, ref) => {
  //
  const { inlineStyle, classes, children } = props;
  //
  return (
    <b className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </b>
  );
});

export default B;
