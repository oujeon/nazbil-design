import React from "react";

export interface LinkProps {}

const Link: React.FC<LinkProps> = (props) => {
  //
  return (
    <link href="/media/examples/link-element-example.css" rel="stylesheet" />
  );
};

export default Link;
