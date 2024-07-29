import React from "react";

export interface CenterProps {}

const Center: React.FC<CenterProps> = (props) => {
  //
  return (
    <center>
      This text will be centered.
      <p>So will this paragraph.</p>
    </center>
  );
};

export default Center;
