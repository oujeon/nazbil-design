import React from "react";

export interface DlProps { classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;}

const Dl = React.forwardRef<HTMLDListElement, DlProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <dl className={classes} ref={ref} style={{ ...inlineStyle }}>
   {children}
    </dl>
  );
});

export default Dl;
