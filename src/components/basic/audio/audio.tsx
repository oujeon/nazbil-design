import React from "react";

export interface AudioProps { 
}

const Audio : React.FC<AudioProps> = (props) => {
 
  //
  return (
    <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>
  );
};

export default Audio;
