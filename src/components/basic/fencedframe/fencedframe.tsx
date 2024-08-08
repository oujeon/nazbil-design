import React from "react";

export interface FencedframeProps {}

const Fencedframe= React.forwardRef<HTMLElement, FencedframeProps>((props, ref) => {
  //
  return (
    <>The Fenced Frame element</>
  );
});

export default Fencedframe;
