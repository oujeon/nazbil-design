import React from "react";

export interface UlProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Ul = React.forwardRef<HTMLUListElement, UlProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <ul className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </ul>
  );
});

export default Ul;
