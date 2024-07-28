import React from "react";

export interface AreaProps {}

const Area: React.FC<AreaProps> = (props) => {
  //
  return (
    <area
      shape="poly"
      coords="129,0,260,95,129,138"
      href="https://developer.mozilla.org/docs/Web/HTTP"
      target="_blank"
      alt="HTTP"
    />
  );
};

export default Area;
