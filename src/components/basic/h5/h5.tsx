import React from "react";

export interface H5Props {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const H5 = React.forwardRef<HTMLHeadingElement, H5Props>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <h5 className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </h5>
  );
});

export default H5;
