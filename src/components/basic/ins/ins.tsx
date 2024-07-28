import React from "react";

export interface InsProps {}

const Ins : React.FC<InsProps> = (props) => {
  //
  return (
    <ins cite="../howtobeawizard.html">
      <p>“A wizard is never late …”</p>
    </ins>
  );
};

export default Ins;
