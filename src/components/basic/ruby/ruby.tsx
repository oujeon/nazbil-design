import React from "react";

export interface RubyProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Ruby = React.forwardRef<HTMLElement, RubyProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <ruby className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </ruby>
  );
});

export default Ruby;
