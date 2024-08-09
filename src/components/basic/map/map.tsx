import React from "react";

export interface MapProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Map = React.forwardRef<HTMLMapElement, MapProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <map className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </map>
  );
});

export default Map;
