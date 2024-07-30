import React from "react";

export interface AsideProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Aside = React.forwardRef<HTMLElement, AsideProps>((props, ref) => {
  const {  inlineStyle, classes,children } = props;
  //
  return (
    <aside className={classes} ref={ref} style={{ ...inlineStyle }}>
          {children}
    </aside>
  );
});

export default Aside;
