import React from "react";

export interface BaseProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  href: string;
  target?: string;
}

const Base = React.forwardRef<HTMLBaseElement, BaseProps>((props, ref) => {
  const { inlineStyle, classes, href, target } = props;
  //
  return (
    <base
      target={target}
      href={href}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    />
  );
});

export default Base;
