import React from "react";

export interface InputImageProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  alt?: string;
  src?: string;
}

const InputImage = React.forwardRef<HTMLInputElement, InputImageProps>(
  (props, ref) => {
    const { inlineStyle, classes, id, alt, src } = props;
    //
    return (
      <input
        type="image"
        id={id}
        alt={alt}
        src={src}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      />
    );
  }
);

export default InputImage;
