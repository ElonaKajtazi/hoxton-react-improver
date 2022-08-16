import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleType } from "../App";

export function ArticlePage() {
  const [article, setArticle] = useState<ArticleType | null>(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/articles/${params.id}`)
      .then((rsp) => rsp.json())
      .then((articleFromServer) => setArticle(articleFromServer));
  }, []);

  if (article === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="full-article">
      <div className="full-article-container">
        <img
          className="full-article__image"
          src={article.image}
          alt={article.title}
        />
        <h2 className="full-article__title">{article.title}</h2>
        <p className="full-article__author-date">{`By: ${article.author} on ${article.date}`}</p>
        <p className="full-article__author-date">{article.description}</p>
      </div>
    </div>
  );
}
