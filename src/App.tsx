import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { ArticlePage } from "./pages/ArticlePage";
import { Main } from "./pages/Main";
//I am going to buld a page for food safety news
//Main page: header, the articles mabye, footer
//Each article: image, title, description
//Article page: more info, you kan like or comment the artice, delete the comment.
// if i have te mybe do smthing  with user and adding my own articles...
export type ArticleType = {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
};
export type ArticlesType = ArticleType[];
function App() {
  const [articles, setArticles] = useState<ArticlesType>([]);
  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((rsp) => rsp.json())
      .then((articlesFromServer) => setArticles(articlesFromServer));
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Main articles={articles} />} />
        <Route path="articlePage/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
