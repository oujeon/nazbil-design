import React from "react";

export interface AddressProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Address = React.forwardRef<HTMLElement, AddressProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <address className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </address>
  );
});

export default Address;
