import React from "react";

import { Route, Switch } from "react-router-dom";
import Workspace from "./components/Blockly/workspace";
import Layout from "./components/Layout/Layout";
import QuizWithTime from "./components/Quiz/quizWithTime";
import Homepage from "./Pages/Homepage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/workspace" component={Workspace} />
      <Route path="/quiz" component={QuizWithTime} />
      <Route path="/home" component={Layout} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
};

export default Routes;
