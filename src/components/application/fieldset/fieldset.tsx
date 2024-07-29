import React from "react";

export interface FieldsetProps {}

const Fieldset: React.FC<FieldsetProps> = (props) => {
  //
  return (
    <fieldset>
      <legend>Choose your favorite monster</legend>
    </fieldset>
  );
};

export default Fieldset;
