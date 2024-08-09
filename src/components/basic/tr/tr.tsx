import React from "react";

export interface TrProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tr = React.forwardRef<HTMLTableRowElement, TrProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <tr className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}{" "}
    </tr>
  );
});

export default Tr;
