import React from "react";

export interface CanvasProps {}

const Canvas: React.FC<CanvasProps> = (props) => {
  //
  return (
    <canvas width="120" height="120">
      An alternative text describing what your canvas displays.
    </canvas>
  );
};

export default Canvas;
