import React from "react";

export interface ImgProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  src?: string;
  alt?: string;
}

const Img = React.forwardRef<HTMLImageElement, ImgProps>((props, ref) => {
  const { inlineStyle, classes, src, alt } = props;
  //
  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    ></img>
  );
});

export default Img;
