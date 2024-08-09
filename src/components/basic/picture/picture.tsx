import React from "react";

export interface PictureProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Picture = React.forwardRef<HTMLElement, PictureProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <picture className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </picture>
  );
});

export default Picture;
