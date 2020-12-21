import { Switch, Route } from "react-router-dom";

import MainScorePage from "../pages/MainScorePage";
import TeamPage from "../pages/TeamPage";

const Routes = (props) => (
  <Switch>
    <Route
      path="/"
      exact
      render={(p) => <MainScorePage {...{ ...p, ...props }} />}
    />
    <Route path="/teams" render={(p) => <TeamPage {...{ ...p, ...props }} />} />
    <Route render={(p) => <MainScorePage {...{ ...p, ...props }} />} />
  </Switch>
);
export default Routes;
