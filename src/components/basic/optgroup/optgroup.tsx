import React from "react";

export interface OptgroupProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  label?: string;
}

const Optgroup = React.forwardRef<HTMLOptGroupElement, OptgroupProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, label } = props;
    //
    return (
      <optgroup
        label={label}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </optgroup>
    );
  }
);

export default Optgroup;
