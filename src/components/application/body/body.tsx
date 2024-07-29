import React from "react";

export interface BodyProps { 
}

const Body : React.FC<BodyProps> = (props) => {
 
  //
  return (
    <body>
    <p>
      The <code>&lt;body&gt;</code> HTML element represents the content of an
      HTML document. There can be only one <code>&lt;body&gt;</code> element in
      a document.
    </p>
  </body>
  );
};

export default Body;
