import React from "react";

const Article = ({ title, content }) => {
  return (
    <article>
      <header>
        <h3 className="article-title">{title}</h3>
      </header>
      <p className="article-content">{content}</p>
    </article>
  );
};

export default Article;
