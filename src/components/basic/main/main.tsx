import React from "react";

export interface MainProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Main = React.forwardRef<HTMLElement, MainProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <main className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </main>
  );
});

export default Main;
