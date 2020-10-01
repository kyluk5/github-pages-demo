import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { navigation } from "../../containers/navigation";
const Start = lazy(() =>
  import("../../containers/StartPage/Start" /* webpackChunkName: "Start" */)
);
const QuestionsPage = lazy(() =>
  import(
    "../../containers/QuestionPage/QuestionPage" /* webpackChunkName: "QuestionsPage" */
  )
);
const TotalScore = lazy(() =>
  import(
    "../../containers/TotalScorePage/TotalScore" /* webpackChunkName: "TotalScore" */
  )
);
// import Start from "../../containers/StartPage/Start";
// import QuestionsPage from "../../containers/QuestionPage/QuestionPage";
// import TotalScore from "../../containers/TotalScorePage/TotalScore";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={navigation.start} component={Start} />
          <Route path={navigation.questions} component={QuestionsPage} />
          <Route path={navigation.score} component={TotalScore} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
