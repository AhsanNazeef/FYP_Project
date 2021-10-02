import QuizReducer from "./Quiz/quizReducer";
import WorkspaceReducer from "./Workspace/workspaceReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  quiz: QuizReducer,
  workspace: WorkspaceReducer,
});

export default rootReducer;
