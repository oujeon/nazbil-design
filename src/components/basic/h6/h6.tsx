import React from "react";

export interface H6Props {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const H6 = React.forwardRef<HTMLHeadingElement, H6Props>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <h6 className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </h6>
  );
});

export default H6;
