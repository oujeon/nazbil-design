import React from "react";

export interface MenuProps {  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;}

const Menu = React.forwardRef<HTMLElement, MenuProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return <menu className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}</menu>;
});

export default Menu;
