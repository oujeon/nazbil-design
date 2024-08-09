import React from "react";

export interface TfootProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tfoot = React.forwardRef<HTMLTableSectionElement, TfootProps>(
  (props, ref) => {
    const { inlineStyle, classes, children } = props;
    //
    return (
      <tfoot className={classes} ref={ref} style={{ ...inlineStyle }}>
        {children}
      </tfoot>
    );
  }
);

export default Tfoot;
