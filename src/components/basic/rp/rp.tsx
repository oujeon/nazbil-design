import React from "react";

export interface RpProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Rp = React.forwardRef<HTMLElement, RpProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <rp className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}1111
    </rp>
  );
});

export default Rp;
