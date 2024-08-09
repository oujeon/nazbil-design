import React from "react";

export interface HrProps {
  classes?: string;
  inlineStyle?: React.CSSProperties; 
}

const Hr = React.forwardRef<HTMLHRElement, HrProps>((props, ref) => {
  const { inlineStyle, classes } = props;
  //
  return <hr className={classes} ref={ref} style={{ ...inlineStyle }}></hr>;
});

export default Hr;
