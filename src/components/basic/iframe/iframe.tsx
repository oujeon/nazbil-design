import React from "react";

export interface IframeProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  title?: string;
  width?: string;
  height?: string;
  src?: string;
}

const Iframe = React.forwardRef<HTMLIFrameElement, IframeProps>(
  (props, ref) => {
    const { inlineStyle, classes, id, title, width, height, src } = props;
    //
    return (
      <iframe
        id={id}
        title={title}
        width={width}
        height={height}
        src={src}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      ></iframe>
    );
  }
);

export default Iframe;
