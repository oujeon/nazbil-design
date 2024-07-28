import React from "react";

export interface FrameProps {}

const Frame: React.FC<FrameProps> = (props) => {
  //
  return (
    <frameset cols="400, 500">
      <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
      <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
    </frameset>
  );
};

export default Frame;
