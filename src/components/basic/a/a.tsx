import React from "react";

type AProps = {
  href: string;
  text: string;
  target?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const A = React.forwardRef<HTMLAnchorElement, AProps>((props, ref) => {
  const { href, target, text, style, className, onClick } = props;
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
      className={className}
      ref={ref}
      style={{ ...style }}
      onClick={handleClick}
    >
      {text}
    </a>
  );
});

export default A;
