import React from "react";

export interface LiProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Li = React.forwardRef<HTMLLIElement, LiProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <li className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </li>
  );
});

export default Li;
