import React from "react";

export interface TableProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <table className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </table>
  );
});

export default Table;
