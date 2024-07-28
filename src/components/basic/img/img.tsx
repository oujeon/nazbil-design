import React from "react";

export interface ImgProps {}

const Img: React.FC<ImgProps> = (props) => {
  //
  return (
    <img
      src="/media/cc0-images/grapefruit-slice-332-332.jpg"
      alt="Grapefruit slice atop a pile of other slices"
    />
  );
};

export default Img;
