import React from "react";

export interface FigureProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Figure = React.forwardRef<HTMLElement, FigureProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <figure className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </figure>
  );
});

export default Figure;
