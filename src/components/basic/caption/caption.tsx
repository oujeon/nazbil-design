import React from "react";

export interface CaptionProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Caption = React.forwardRef<HTMLElement, CaptionProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  return (
    <caption className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </caption>
  );
});

export default Caption;
