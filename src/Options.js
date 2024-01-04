function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div>
      {questions.options.map((options, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? questions.correctOption === index
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={options}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
        >
          {options}
        </button>
      ))}
    </div>
  );
}

export default Options;
