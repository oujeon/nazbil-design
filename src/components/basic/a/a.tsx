import React from "react";

export interface AProps {
  href: string;
  text: string;
  target?: string;
  classes?: string;
  inlineStyle?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const A = React.forwardRef<HTMLAnchorElement, AProps>((props, ref) => {
  const { href, target, text, inlineStyle, classes, onClick } = props;
  //

  //
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    (onClick as React.MouseEventHandler<HTMLAnchorElement>)?.(e);
  };
  //
  return (
    <a
      href={href}
      target={target}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
      onClick={handleClick}
    >
      {text}
    </a>
  );
});

export default A;
