import React from "react";

export interface InputFileProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  (props, ref) => {
    const { inlineStyle, classes } = props;

    //
    return (
      <input
        type="file"
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputFile;
