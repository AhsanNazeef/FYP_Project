import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestions, fetchQuiz } from "../../redux/Quiz/quizActions";

import QuizLoader from "./quizLoader";
import { Spinner } from "react-bootstrap";

function Quiz(props) {
  const ques = useSelector((state) => state.quiz.questions);
  const currentQues = useSelector((state) => state.quiz.questionNo);
  const loading = useSelector((state) => state.quiz.isLoading);
  const lastQuestion = useSelector((state) => state.quiz.lastQuestion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);
  if (lastQuestion) props.setLoad();

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        ques &&
        ques[currentQues] && (
          <>
            <QuizLoader
              question={ques[currentQues].question}
              option1={ques[currentQues].option1}
              option2={ques[currentQues].option2}
              option3={ques[currentQues].option3}
              option4={ques[currentQues].option4}
              onSubmit={(ans) => dispatch(nextQuestions({ answer: ans }))}
            />
          </>
        )
      )}
    </div>
  );
}

export default Quiz;
