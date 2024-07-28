import React from "react";

export interface FigureProps {}

const Figure: React.FC<FigureProps> = (props) => {
  //
  return (
    <figure>
      <img
        src="/media/cc0-images/elephant-660-480.jpg"
        alt="Elephant at sunset"
      />
      <figcaption>An elephant at sunset</figcaption>
    </figure>
  );
};

export default Figure;
