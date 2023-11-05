import "./styles/meyer-reset-1st.css";
import "./styles/my-css-reset-2nd.css";
import "./styles/normalize-3rd.css";
import "./styles/typography-4th.css";
import "./styles/App.css";
import GameCards from "./components/GameCards";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [totalClick, setTotalClick] = useState(0);
  const API_KEY = "CEmNnc4hkcJ7ocikD6uihaUTPMb8RPRE";
  const baseUrl = "https://api.giphy.com/v2/emoji?";
  const limit = 10;
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
        console.log("result.data", result.data);
        setCards(result.data);
      });
  }, []);
  return (
    <div className="cards-container">
      <GameCards cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
