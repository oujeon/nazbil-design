import React from "react";

export interface FigcaptionProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Figcaption = React.forwardRef<HTMLElement, FigcaptionProps>(
  (props, ref) => {
    const { inlineStyle, classes, children } = props;
    //
    return (
      <figcaption className={classes} ref={ref} style={{ ...inlineStyle }}>
        {children}
      </figcaption>
    );
  }
);

export default Figcaption;
