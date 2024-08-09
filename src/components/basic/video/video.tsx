import React from "react";

export interface VideoProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  width?: string;
}

const Video = React.forwardRef<HTMLVideoElement, VideoProps>((props, ref) => {
  const { inlineStyle, classes, children, width } = props;
  //
  return (
    <video
      controls
      width={width}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    >
      {children}
    </video>
  );
});

export default Video;
