import React from "react";

export interface CodeProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Code = React.forwardRef<HTMLElement, CodeProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <code className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </code>
  );
});

export default Code;
