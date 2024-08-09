import React from "react";

export interface ObjectProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  type?: string;
  data?: string;
  width?: string;
  height?: string;
}

const Object = React.forwardRef<HTMLObjectElement, ObjectProps>(
  (props, ref) => {
    const { inlineStyle, classes, type, data, width, height } = props;
    //
    return (
      <object
        type={type}
        data={data}
        width={width}
        height={height}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      ></object>
    );
  }
);

export default Object;
