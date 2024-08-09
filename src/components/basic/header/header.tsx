import React from "react";

export interface HeaderProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <header className={classes} ref={ref} style={{ ...inlineStyle }}> 
      {children}
    </header>
  );
});

export default Header;
