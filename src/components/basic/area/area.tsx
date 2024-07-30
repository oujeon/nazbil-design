import React from "react";

export interface AreaProps {
  shape: string;
  coords: string;
  href?: string;
  alt?: string;
  classes?: string;
  inlineStyle?: React.CSSProperties;
}

const Area = React.forwardRef<HTMLElement, AreaProps>((props, ref) => {
  const { shape, coords, href, alt, inlineStyle, classes } = props;

  //
  return (
    <area
      shape={shape}
      coords={coords}
      href={href}
      alt={alt}
      style={{ ...inlineStyle }}
      className={classes}
    />
  );
});

export default Area;
