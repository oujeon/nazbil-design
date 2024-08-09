import React from "react";

export interface OptionProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  value?: string;
}

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, value } = props;
    //
    return (
      <option
        value={value}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </option>
    );
  }
);

export default Option;
