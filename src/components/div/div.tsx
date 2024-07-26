import React from "react";

export interface DivProps {}

const Div: React.FC<DivProps> = (props) => {
  //
  return (
    <div>
      <img src="/media/examples/leopard.jpg" alt="An intimidating leopard." />
      <p>Beware of the leopard</p>
    </div>
  );
};

export default Div;
