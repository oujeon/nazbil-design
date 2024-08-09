import React from "react";

export interface SourceProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  src?: string;
  type?: string;
}

const Source = React.forwardRef<HTMLSourceElement, SourceProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, src, type } = props;
    //
    return (
      <source
        src={src}
        type={type}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </source>
    );
  }
);

export default Source;
