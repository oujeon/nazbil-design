import React from "react";

export interface RtProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Rt = React.forwardRef<HTMLElement, RtProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <rt className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </rt>
  );
});

export default Rt;
