import React from "react";

export interface H3Props {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const H3 = React.forwardRef<HTMLHeadingElement, H3Props>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <h3 className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </h3>
  );
});

export default H3;
