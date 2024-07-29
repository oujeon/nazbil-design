import React from "react";

export interface DatalistProps {}

const Datalist: React.FC<DatalistProps> = (props) => {
  //
  return (
    <datalist id="ice-cream-flavors">
      <option value="Chocolate"></option>
      <option value="Coconut"></option>
      <option value="Mint"></option>
      <option value="Strawberry"></option>
      <option value="Vanilla"></option>
    </datalist>
  );
};

export default Datalist;
