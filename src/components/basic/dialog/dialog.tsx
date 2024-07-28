import React from "react";

export interface DialogProps {}

const Dialog: React.FC<DialogProps> = (props) => {
  //
  return (
    <dialog open>
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
};

export default Dialog;
