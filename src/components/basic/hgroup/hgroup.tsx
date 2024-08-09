import React from "react";

export interface HgroupProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Hgroup = React.forwardRef<HTMLElement, HgroupProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <hgroup className={classes} ref={ref} style={{ ...inlineStyle }}>
      {" "}
      {children}
    </hgroup>
  );
});

export default Hgroup;
