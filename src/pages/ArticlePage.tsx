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
        <div className="full-article__info">
          <h2 className="full-article__title">{article.title}</h2>
          <p className="full-article__author-date">{`By: ${article.author} on ${article.date}`}</p>
          <p className="full-article__author-date">{article.description}</p>
        </div>
        <div className="full-article__comments">
          <h3 className="full-article__comments-title">Comments</h3>
          {article.comments.map((comment) => (
            <p className="full-article__comment">{comment.content}</p>
          ))}

          <form className="comment-form">
            <input className="comment-input" type="text" placeholder="Write your comment" />
            <button className="submit-comment" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
