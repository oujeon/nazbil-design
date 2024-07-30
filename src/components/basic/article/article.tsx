import React from "react";

export interface ArticleProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Article = React.forwardRef<HTMLElement, ArticleProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <article className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </article>
  );
});

export default Article;
