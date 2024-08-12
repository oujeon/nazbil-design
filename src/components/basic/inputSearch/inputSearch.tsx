import React from "react";

export interface InputSearchProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;
    //
    //
    return (
      <input
        type="search"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputSearch;
