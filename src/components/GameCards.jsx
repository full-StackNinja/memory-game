import PropTypes from "prop-types";

function GameCards({
  cards,
  setCards,
  totalClicks,
  setTotalClicks,
  cardClicks,
  setCardClicks,
  bestScore,
  setBestScore,
}) {
  const handleCardClick = (card) => {
    if (cardClicks[card.id] === 0) {
      const newCardClicks = { ...cardClicks };
      newCardClicks[card.id] = 1;
      setCardClicks(newCardClicks);
      setTotalClicks(totalClicks + 1);

      const prevCards = [...cards];
      prevCards.map((card, index) => {
        const i = prevCards.length - 1 - index;
        const j = Math.floor(Math.random() * (i + 1));
        [prevCards[i], prevCards[j]] = [prevCards[j], prevCards[i]];
      });
      setCards(prevCards);
    } else {
      if (totalClicks > bestScore) {
        setBestScore(totalClicks);
      }
      setTotalClicks(0);
      const oldCardClicks = { ...cardClicks };
      const ids = Object.keys(oldCardClicks);
      ids.forEach((cardId) => {
        oldCardClicks[cardId] = 0;
      });
      setCardClicks(oldCardClicks);
    }
  };
  return cards.map((card) => {
    // console.log("card", card.title);
    const url = card.images["480w_still"].url;
    const title = card.title;
    const id = card.id;
    return (
      <div
        className="card-container"
        key={id}
        onClick={() => {
          handleCardClick(card);
        }}
      >
        <img className="card-image" src={url} alt={title} />
        <p className="card-title">{title}</p>
      </div>
    );
  });
}

GameCards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default GameCards;
