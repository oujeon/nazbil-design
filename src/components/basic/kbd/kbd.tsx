import React from "react";

export interface KbdProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return (
    <kbd className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </kbd>
  );
});

export default Kbd;
