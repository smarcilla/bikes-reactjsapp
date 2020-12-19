import { Switch, Route } from "react-router-dom";

import MainScorePage from "../pages/MainScorePage";
import TeamPage from "../pages/TeamPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={MainScorePage} />
    <Route path="/teams" component={TeamPage} />
    <Route component={MainScorePage} />
  </Switch>
);
export default Routes;
