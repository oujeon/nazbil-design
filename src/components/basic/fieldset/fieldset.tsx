import React from "react";

export interface FieldsetProps {  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;}

const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <fieldset className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </fieldset>
  );
});

export default Fieldset;
