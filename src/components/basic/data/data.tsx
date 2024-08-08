import React from "react";

export interface DataProps {
  value?: string;
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Data = React.forwardRef<HTMLDataElement, DataProps>((props, ref) => {
  const { value, inlineStyle, classes, children } = props;

  //
  return (
    <data
      value={value}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    >
      {children}
    </data>
  );
});

export default Data;
