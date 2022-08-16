export function Main({ articles }) {
  return (
    <main className="main">
      <ul className="article-list">
        {articles.map((article) => (
          <li>
            <article className="article">
              <img className="article-image" src={article.image} />
              <div className="article-info">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
