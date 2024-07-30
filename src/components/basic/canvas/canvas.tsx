import React from "react";

export interface CanvasProps {
  width?: string;
  height?: string; 
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Canvas = React.forwardRef<HTMLCanvasElement, CanvasProps>(
  (props, ref) => {
    const { width, height, inlineStyle, classes, children } = props;
    return (
      <canvas
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
        width={width}
        height={height}
      >
        {children}
      </canvas>
    );
  }
);

export default Canvas;
