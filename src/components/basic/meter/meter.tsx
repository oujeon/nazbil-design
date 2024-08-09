import React from "react";

export interface MeterProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  min?: string;
  max?: string;
  low?: number;
  high?: number;
  optimum?: number;
  value?: string;
}

const Meter = React.forwardRef<HTMLMeterElement, MeterProps>((props, ref) => {
  const {
    inlineStyle,
    classes,
    children,
    id,
    min,
    max,
    low,
    high,
    optimum,
    value,
  } = props;
  //
  return (
    <meter
      id={id}
      min={min}
      max={max}
      low={low}
      high={high}
      optimum={optimum}
      value={value}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    >
      {children}
    </meter>
  );
});

export default Meter;
