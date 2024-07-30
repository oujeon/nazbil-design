import React from "react";

export interface ColgroupProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Colgroup = React.forwardRef<HTMLElement, ColgroupProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  //
  return <>empty</>;
});

export default Colgroup;
