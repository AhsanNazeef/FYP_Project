import {
  NEXT_QUESTION,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_ERROR,
  FETCH_QUIZ_SUCCESS,
} from "./quizTypes";

import { quest } from "../../components/Quiz/questions";

export const nextQuestions = (props) => {
  return { type: NEXT_QUESTION, payload: { answer: props.answer } };
};

export const fetchQuizRequest = () => {
  return {
    type: FETCH_QUIZ_REQUEST,
  };
};

export const fetchQuizSuccess = (questions) => {
  return {
    type: FETCH_QUIZ_SUCCESS,
    payload: { questions: questions },
  };
};

export const fetchQuizError = (error) => {
  return {
    type: FETCH_QUIZ_ERROR,
    payload: { error },
  };
};

export const fetchQuiz = () => {
  return (dispatch) => {
    try {
      dispatch(fetchQuizRequest());
      dispatch(fetchQuizSuccess(quest));
    } catch (error) {
      const err = error.message;
      dispatch(fetchQuizError(err));
    }
  };
};
