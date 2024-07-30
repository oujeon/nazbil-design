import React from "react";

export interface BdiProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Bdi = React.forwardRef<HTMLElement, BdiProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <bdi className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </bdi>
  );
});

export default Bdi;
