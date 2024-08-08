import React from "react";

export interface DialogProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
  (props, ref) => {
    const { inlineStyle, classes, children } = props;
    //
    return (
      <dialog open className={classes} ref={ref} style={{ ...inlineStyle }}>
        {children}
      </dialog>
    );
  }
);

export default Dialog;
