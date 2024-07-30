import React from "react";

export interface AbbrProps {
  text: string;
  classes?: string;
  inlineStyle?: React.CSSProperties;
}

const Abbr = React.forwardRef<HTMLElement, AbbrProps>((props, ref) => {
  const { text, inlineStyle, classes } = props;
  //
  //
  return (
    <abbr className={classes} ref={ref} style={{ ...inlineStyle }}>
      {text}
    </abbr>
  );
});

export default Abbr;
