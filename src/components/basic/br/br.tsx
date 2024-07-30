import React from "react";

export interface BrProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
}

const Br = React.forwardRef<HTMLBRElement, BrProps>((props, ref) => {
  //
  const { inlineStyle, classes } = props;
  //
  return <br className={classes} ref={ref} style={{ ...inlineStyle }} />;
});

export default Br;
