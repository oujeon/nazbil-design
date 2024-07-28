import React from "react";

export interface SlotProps {}

const Slot : React.FC<SlotProps> = (props) => {
  //
  return <slot> </slot>;
};

export default Slot;
