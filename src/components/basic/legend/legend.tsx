import React from "react";

export interface LegendProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Legend = React.forwardRef<HTMLLegendElement, LegendProps>(
  (props, ref) => {
    const { inlineStyle, classes, children } = props;

    //
    return (
      <legend className={classes} ref={ref} style={{ ...inlineStyle }}>
        {children}
      </legend>
    );
  }
);

export default Legend;
