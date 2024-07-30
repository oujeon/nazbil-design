import React from "react";

export interface AudioProps {
  src: string;
  classes?: string;
  inlineStyle?: React.CSSProperties;
}

const Audio = React.forwardRef<HTMLAudioElement, AudioProps>((props, ref) => {
  const { src, inlineStyle, classes } = props;
  //
  console.log("audio src : ", src);
  //
  return (
    <audio
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
      controls
      src={src}
    />
  );
});

export default Audio;
