import React from "react";

export interface FooterProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <footer className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </footer>
  );
});

export default Footer;
