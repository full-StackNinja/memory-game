import PropTypes from "prop-types";
function GameCards({ cards }) {
  return cards.map((card, index) => {
    console.log("card", card.title);
    const url = card.images["480w_still"].url;
    const title = card.title;
    return (
      <div className="card-container" key={index}>
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
