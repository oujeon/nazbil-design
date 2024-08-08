import React from "react";

export interface DatalistProps {
  id?: string;
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Datalist = React.forwardRef<HTMLDataListElement, DatalistProps>(
  (props, ref) => {
    const { id, inlineStyle, classes, children } = props;
    //
    return (
      <datalist
        id={id}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </datalist>
    );
  }
);

export default Datalist;
