import {
  NEXT_QUESTION,
  END_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_ERROR,
} from "./quizTypes";

const initialState = {
  questions: [],
  questionNo: 0,
  marks: 0,
  quizType: "",
  difficulty: "",
  totalQuestions: 0,
  error: "",
  isLoading: false,
  lastQuestion: false,
};

const QuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        questions: action.payload.questions,
      };
    case FETCH_QUIZ_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case NEXT_QUESTION:
      if (action.payload.answer === state.questions[state.questionNo].answer) {
        return {
          ...state,
          questionNo: state.questionNo + 1,
          marks: state.marks + 1,
          lastQuestion: state.questionNo >= state.questions.length - 1,
        };
      }
      return {
        ...state,
        questionNo: state.questionNo + 1,
        lastQuestion: state.questionNo >= state.questions.length - 1,
      };
    case END_QUIZ:
      return initialState;
    default:
      return state;
  }
};

export default QuizReducer;
