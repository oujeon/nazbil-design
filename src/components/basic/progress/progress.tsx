import React from "react";

export interface ProgressProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  max?: string;
  value?: string;
}

const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, id, max, value } = props;
    //
    return (
      <progress
        id={id}
        max={max}
        value={value}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </progress>
    );
  }
);

export default Progress;
