import React from "react";

export interface OlProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Ol = React.forwardRef<HTMLOListElement, OlProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <ol className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </ol>
  );
});

export default Ol;
