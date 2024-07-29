import React from "react";

export interface CiteProps { 
}

const Cite : React.FC<CiteProps> = (props) => {
 
  //
  return (
    <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite>
  );
};

export default Cite;
