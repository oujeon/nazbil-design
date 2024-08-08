import React from "react";

export interface DirProps {}

const Dir = React.forwardRef<HTMLElement, DirProps>((props, ref) => {
  //
  return <>The Directory element</>;
});

export default Dir;
