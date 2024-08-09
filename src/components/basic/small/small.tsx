import React from "react";

export interface SmallProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Small = React.forwardRef<HTMLElement, SmallProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <small className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </small>
  );
});

export default Small;
