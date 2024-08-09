import React from "react";

export interface NavProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Nav = React.forwardRef<HTMLElement, NavProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <nav className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </nav>
  );
});

export default Nav;
