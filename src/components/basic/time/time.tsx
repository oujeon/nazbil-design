import React from "react";

export interface TimeProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  datetime?: string;
}

const Time = React.forwardRef<HTMLTimeElement, TimeProps>((props, ref) => {
  const { inlineStyle, classes, children, datetime } = props;
  //
  return (
    <time
      dateTime={datetime}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    >
      {children}
    </time>
  );
});

export default Time;
