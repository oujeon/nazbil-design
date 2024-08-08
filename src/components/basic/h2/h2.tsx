import React from "react";

export interface H2Props {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const H2 = React.forwardRef<HTMLHeadingElement, H2Props>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <h2 className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </h2>
  );
});

export default H2;
