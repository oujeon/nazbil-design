import React from "react";

export interface IProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const I = React.forwardRef<HTMLElement, IProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <i className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </i>
  );
});

export default I;
