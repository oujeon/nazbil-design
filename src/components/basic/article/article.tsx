import React from "react";

export interface ArticleProps {}

const Article : React.FC<ArticleProps> = (props) => {
  //
  return ( 
      <article>
        <h2>03 March 2018</h2>
        <p>Rain.</p>
      </article> 
  );
};

export default Article;
