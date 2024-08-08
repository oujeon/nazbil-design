import React from "react";

export interface DetailsProps {  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;}

const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <details className={classes} ref={ref} style={{ ...inlineStyle }}>
            {children}
    </details>
  );
});

export default Details;
