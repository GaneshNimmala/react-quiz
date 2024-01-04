function NextComponent({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "next" })}
          className="btn btn-ui"
        >
          Next
        </button>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      </div>
    );
}

export default NextComponent;
