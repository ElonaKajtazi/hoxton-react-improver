import { useState } from "react";
import "./App.css";
//I am going to buld a page for food safety news
//Main page: header, the articles mabye, footer
//Each article: image, title, description
//Article page: more info, you kan like or comment the artice, delete the comment.
// if i have te mybe do smthing  with user and adding my own articles...
function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      image:
        "https://www.foodsafetynews.com/files/2019/02/water_1000x565-825x466.jpg",
      title: "FDA’s new proposed food-safety ag water rule no slam dunk",
      description:
        "“Like getting the rug pulled out from under us.” That’s how somefarmers react when hearing about the FDA’s sudden and unexpected change in food safety requirements…",
    },
    {
      id: 2,
      image:
        "https://www.foodsafetynews.com/files/2014/02/bacon-spread-recall-1.jpg",
      title:
        "California’s Proposition 12 will be heard by Supreme Court on Oct. 11",
      description:
        "The Supreme Court will hear oral arguments in National Pork Producers Council v Karen Ross on Oct. 11. The court on March 28 granted the writ of certiorari to officially put California Proposition 12 on…",
    },
    {
      id: 3,
      image:
        "https://www.foodsafetynews.com/files/2019/12/FDA-Warning-413x234.png",
      title:
        "Brooklyn food firm warned by FDA over lack of import verification",
      description:
        "As part of its enforcement activities, the Food and Drug Administration sends warning letters to entities under its jurisdiction. Some letters are not posted for public view until weeks or months after they are sent.",
    },
    {
      id: 4,
      image:
        "https://www.foodsafetynews.com/files/2013/03/MiniPizzaSliceMain-300x183-1.jpg",
      title: "Frozen pizza recalled over metal pieces",
      description:
        "Woodbridge, IL-based Home Run Inn Frozen Foods is recalling approximately 13,099 pounds of frozen meat pizza product that may be contaminated with extraneous materials, specifically metal, USDA’s Food Safety and Inspection Service (FSIS) reported Sunday…",
    },
  ]);
  return (
    <div className="App">
      <header className="header">
        <h1>Food Safety News</h1>
      </header>
      <main className="main">
        <ul className="article-list">
          <li>
            <article className="article">
              <img
                className="article-image"
                src="https://www.foodsafetynews.com/files/2019/02/water_1000x565-825x466.jpg"
                alt="water"
              />
              <h2>FDA’s new proposed food-safety ag water rule no slam dunk</h2>
              <p>
                “Like getting the rug pulled out from under us.” That’s how some
                farmers react when hearing about the FDA’s sudden and unexpected
                change in food safety requirements…
              </p>
            </article>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
