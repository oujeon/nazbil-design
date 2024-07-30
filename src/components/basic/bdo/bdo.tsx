import React from "react";

export interface BdoProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Bdo = React.forwardRef<HTMLElement, BdoProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <bdo className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </bdo>
  );
});

export default Bdo;
