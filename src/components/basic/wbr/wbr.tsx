import React from "react";

export interface WbrProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Wbr = React.forwardRef<HTMLElement, WbrProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <wbr className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </wbr>
  );
});

export default Wbr;
