import Options from "./Options";
function Question({ questions, dispatch, answer }) {
  console.log(questions);
  return (
    <div>
      <h3>{questions.question}</h3>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
