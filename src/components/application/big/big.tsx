import React from "react";

export interface BigProps { 
}

const Big : React.FC<BigProps> = (props) => {
 
  //
  return (
    <big>This whole sentence is in bigger letters.</big>
  );
};

export default Big;
