import React from "react";

export interface BlockquoteProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  cite?: string;
}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, cite } = props;
    //
    return (
      <blockquote
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
        cite={cite}
      >
        {children}
      </blockquote>
    );
  }
);

export default Blockquote;
