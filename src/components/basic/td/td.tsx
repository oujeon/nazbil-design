import React from "react";

export interface TdProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Td = React.forwardRef<HTMLTableCellElement, TdProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <td className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </td>
  );
});

export default Td;
