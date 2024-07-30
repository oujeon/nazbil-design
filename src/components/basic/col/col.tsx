import React from "react";

export interface ColProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Col = React.forwardRef<HTMLElement, ColProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;

  //
  return <></>;
});

export default Col;
