import React from "react";

export interface SelectProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
  id?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, name, id } = props;
    return (
      <select
        name={name}
        id={id}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </select>
    );
  }
);

export default Select;
