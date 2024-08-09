import React from "react";

export interface OutputProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
  htmlFor?: string;
}

const Output = React.forwardRef<HTMLOutputElement, OutputProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, name, htmlFor } = props;
    //
    return (
      <output
        name={name}
        htmlFor={htmlFor}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </output>
    );
  }
);

export default Output;
