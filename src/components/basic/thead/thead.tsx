import React from "react";

export interface TheadProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Thead = React.forwardRef<HTMLTableSectionElement, TheadProps>(
  (props, ref) => {
    const { inlineStyle, classes, children } = props;
    //
    return (
      <thead className={classes} ref={ref} style={{ ...inlineStyle }}>
        {children}
      </thead>
    );
  }
);

export default Thead;
