import "./styles/meyer-reset-1st.css";
import "./styles/my-css-reset-2nd.css";
import "./styles/normalize-3rd.css";
import "./styles/typography-4th.css";
import "./styles/App.css";
import GameCards from "./components/GameCards";
import ScoreBoard from "./components/ScoreBoard";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const [cardClicks, setCardClicks] = useState({});
  const [bestScore, setBestScore] = useState(0);

  const API_KEY = "CEmNnc4hkcJ7ocikD6uihaUTPMb8RPRE";
  const baseUrl = "https://api.giphy.com/v2/emoji?";
  const limit = 20;
  const offset = 0;
  useEffect(() => {
    fetch(`${baseUrl}api_key=${API_KEY}&limit=${limit}&offset=${offset}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Data not fetched successfully!");
        }
      })
      .then((result) => {
        setCards(result.data);
        // get ids of the giphy images to store them into state hook
        const cardIds = {};
        result.data.forEach((card) => {
          const id = card.id;
          cardIds[id] = 0;
        });
        setCardClicks(cardIds);
      });
  }, []);
  return (
    <>
      <div className="header-container">
        <Header />
        <ScoreBoard totalClicks={totalClicks} bestScore={bestScore} />
      </div>
      <div className="cards-container">
        <GameCards
          cards={cards}
          setCards={setCards}
          totalClicks={totalClicks}
          setTotalClicks={setTotalClicks}
          cardClicks={cardClicks}
          setCardClicks={setCardClicks}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      </div>
    </>
  );
}

export default App;
