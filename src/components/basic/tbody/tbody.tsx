import React from "react";

export interface TbodyProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tbody = React.forwardRef<HTMLTableSectionElement, TbodyProps>(
  (props, ref) => {
    const { inlineStyle, classes, children } = props;
    //
    return (
      <tbody className={classes} ref={ref} style={{ ...inlineStyle }}>
        {children}
      </tbody>
    );
  }
);

export default Tbody;
