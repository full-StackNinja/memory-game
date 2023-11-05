import PropTypes from "prop-types";
const ScoreBoard = ({ totalClicks, bestScore,  }) => {
  // if (totalClicks > bestScore) {
  //   setBestScore(bestScore + 1);
  // }
  return (
    <div className="score-board">
      <p className="current-score">Current Score: {totalClicks}</p>
      <p className="best-score">Best Score: {bestScore}</p>
    </div>
  );
};

ScoreBoard.propTypes = {
  totalClicks: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  // setBestScore: PropTypes.func.isRequired,
};

export default ScoreBoard;
