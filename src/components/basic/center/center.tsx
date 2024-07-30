import React from "react";

export interface CenterProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Center = React.forwardRef<HTMLElement, CenterProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return <>empty</>;
});

export default Center;
