import React from "react";

function QuizLoader({
  question,
  option1,
  option2,
  option3,
  option4,
  onSubmit,
}) {
  return (
    <>
      <h1>{question}</h1>
      <button
        onClick={(e) => {
          onSubmit(e.target.value);
        }}
        value={option1}
      >
        {option1}
      </button>
      <button
        onClick={(e) => {
          onSubmit(e.target.value);
        }}
        value={option2}
      >
        {option2}
      </button>
      <button
        onClick={(e) => {
          onSubmit(e.target.value);
        }}
        value={option3}
      >
        {option3}
      </button>
      <button
        onClick={(e) => {
          onSubmit(e.target.value);
        }}
        value={option4}
      >
        {option4}
      </button>
    </>
  );
}

export default QuizLoader;
