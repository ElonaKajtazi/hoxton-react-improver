import { useEffect, useState } from "react";
import "./App.css";
//I am going to buld a page for food safety news
//Main page: header, the articles mabye, footer
//Each article: image, title, description
//Article page: more info, you kan like or comment the artice, delete the comment.
// if i have te mybe do smthing  with user and adding my own articles...
function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((rsp) => rsp.json())
      .then((articlesFromServer) => setArticles(articlesFromServer));
  }, []);
  return (
    <div className="App">
      <header className="header">
        <h1>Food Safety News</h1>
      </header>
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
    </div>
  );
}

export default App;
