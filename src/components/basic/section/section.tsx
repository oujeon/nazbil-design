import React from "react";

export interface SectionProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <section className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </section>
  );
});

export default Section;
