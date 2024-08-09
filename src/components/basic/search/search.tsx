import React from "react";

export interface SearchProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Search = React.forwardRef<HTMLElement, SearchProps>((props, ref) => {
  const { inlineStyle, classes, children } = props;
  //
  return (
    <search className={classes} ref={ref} style={{ ...inlineStyle }}>
      {children}
    </search>
  );
});

export default Search;
