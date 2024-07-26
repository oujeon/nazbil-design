import React from "react";

export interface DetailsProps {}

const Details: React.FC<DetailsProps> = (props) => {
  //
  return (
    <details>
      <summary>Details</summary>
      Something small enough to escape casual notice.
    </details>
  );
};

export default Details;
