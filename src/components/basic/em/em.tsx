import React from "react";

export interface EmProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Em = React.forwardRef<HTMLElement, EmProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <em className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </em>
  );
});

export default Em;
