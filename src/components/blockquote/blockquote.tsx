import React from "react";

export interface BlockquoteProps {}

const Blockquote: React.FC<BlockquoteProps> = (props) => {
  //
  return (
    <blockquote cite="https://www.huxley.net/bnw/four.html">
      <p>
        Words can be like X-rays, if you use them properly—they’ll go through
        anything. You read and you’re pierced.
      </p>
    </blockquote>
  );
};

export default Blockquote;
