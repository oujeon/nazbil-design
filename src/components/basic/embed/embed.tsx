import React from "react";

export interface EmbedProps { 
}

const Embed : React.FC<EmbedProps> = (props) => {
 
  //
  return (
    <embed type="video/webm" src="/media/cc0-videos/flower.mp4" width="250" height="200" />
  );
};

export default Embed ;
