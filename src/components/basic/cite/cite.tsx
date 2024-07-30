import React from "react";

export interface CiteProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Cite = React.forwardRef<HTMLElement, CiteProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <cite className={classes} ref={ref} style={{ ...inlineStyle }}> 
      {children}
    </cite>
  );
});

export default Cite;
