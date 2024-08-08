import React from "react";

export interface EmbedProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  type?: string;
  src?: string;
  width?: string;
  height?: string;
}

const Embed = React.forwardRef<HTMLEmbedElement, EmbedProps>((props, ref) => {
  const { inlineStyle, classes, type, src, width, height } = props;

  //
  return (
    <embed
      type={type}
      src={src}
      width={width}
      height={height}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    />
  );
});

export default Embed;
