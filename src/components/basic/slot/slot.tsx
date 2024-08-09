import React from "react";

export interface SlotProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  name?: string;
}

const Slot = React.forwardRef<HTMLSlotElement, SlotProps>((props, ref) => {
  const { inlineStyle, classes, children, name } = props;
  //
  return (
    <slot name={name} className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </slot>
  );
});

export default Slot;
