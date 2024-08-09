import React from "react";

export interface TrackProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;

  kind: string;
  srcLang: string;
  src: string;
}

const Track = React.forwardRef<HTMLTrackElement, TrackProps>((props, ref) => {
  const { inlineStyle, classes, kind, srcLang, src } = props;
  //
  return (
    <track
      default
      kind={kind}
      srcLang={srcLang}
      src={src}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    />
  );
});

export default Track;
