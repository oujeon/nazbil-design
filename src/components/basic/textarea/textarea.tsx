import React from "react";

export interface TextareaProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  name?: string;
  rows?: number;
  cols?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, id, name, rows, cols } = props;
    //
    return (
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </textarea>
    );
  }
);

export default Textarea;
