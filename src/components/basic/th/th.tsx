import React from "react";

export interface ThProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  scope?: string;
}

const Th = React.forwardRef<HTMLTableCellElement, ThProps>((props, ref) => {
  const { inlineStyle, classes, children, scope } = props;
  //
  return (
    <th scope={scope} className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </th>
  );
});

export default Th;
