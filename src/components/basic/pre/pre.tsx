import React from "react";

export interface PreProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Pre = React.forwardRef<HTMLPreElement, PreProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <pre className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </pre>
  );
});

export default Pre;
