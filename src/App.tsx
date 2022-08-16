import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
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
      <Header />
      <Main articles={articles} />
    </div>
  );
}

export default App;
