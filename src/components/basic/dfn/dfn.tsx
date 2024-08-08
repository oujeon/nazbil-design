import React from "react";

export interface DfnProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Dfn = React.forwardRef<HTMLElement, DfnProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <dfn className={classes} ref={ref} style={{ ...inlineStyle }}> 
      {children}
    </dfn>
  );
});

export default Dfn;
