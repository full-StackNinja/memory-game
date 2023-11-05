import PropTypes from "prop-types";
function GameCards({ cards, setCards }) {
  const handleCardClick = (card) => {
    const prevCards = [...cards];
    prevCards.map((card, index) => {
      const i = prevCards.length - 1 - index;
      const j = Math.floor(Math.random() * (i + 1));
      [prevCards[i], prevCards[j]] = [prevCards[j], prevCards[i]];
    });
    setCards(prevCards);
  };
  return cards.map((card, index) => {
    console.log("card", card.title);
    const url = card.images["480w_still"].url;
    const title = card.title;
    return (
      <div
        className="card-container"
        key={index}
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
