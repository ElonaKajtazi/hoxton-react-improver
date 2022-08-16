import { Link } from "react-router-dom";
import { ArticleType } from "../App";

type Props = {
  articles: ArticleType[];
};
export function Main({ articles }: Props) {
  return (
    <main className="main">
      <ul className="article-list">
        {articles.map((article) => (
          <Link to={`/articlePage/${article.id}`}>
            <li>
              <article className="article">
                <img className="article-image" src={article.image} />
                <div className="article-info">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
              </article>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
