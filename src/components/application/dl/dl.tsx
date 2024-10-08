import React from "react";

export interface DlProps {}

const Dl: React.FC<DlProps> = (props) => {
  //
  return (
    <dl>
      <dt>Beast of Bodmin</dt>
      <dd>A large feline inhabiting Bodmin Moor.</dd>

      <dt>Morgawr</dt>
      <dd>A sea serpent.</dd>

      <dt>Owlman</dt>
      <dd>A giant owl-like creature.</dd>
    </dl>
  );
};

export default Dl;
