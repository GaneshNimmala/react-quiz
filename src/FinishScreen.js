function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        onClick={() => dispatch({ type: "retake" })}
        className="btn btn-ui"
      >
        Retake
      </button>
    </>
  );
}

export default FinishScreen;
