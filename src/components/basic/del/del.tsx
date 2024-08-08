import React from "react";

export interface DelProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Del = React.forwardRef<HTMLModElement, DelProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <del className={classes} ref={ref} style={{ ...inlineStyle }}> 
      {children}
    </del>
  );
});

export default Del;
