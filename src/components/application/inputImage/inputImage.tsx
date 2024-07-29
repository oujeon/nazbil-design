import React from "react";

export interface InputImageProps {}

const InputImage: React.FC<InputImageProps> = (props) => {
  //
  return (
    <input
      type="image"
      id="image"
      alt="Login"
      src="/media/examples/login-button.png"
    />
  );
};

export default InputImage;
